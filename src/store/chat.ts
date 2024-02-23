import { defineStore } from "pinia";
import { ref } from "vue";

interface Chat {
  id: string;
  datetime: string;
  prefix: string;
  code: string;
  name: string;
  business_type: string;
  img_url: string;
  details: string;
  active: boolean;
  update_at: string;
  member: number;
  chat_room?: any[];
  unread_room?: number;
}

type ChatArray = Chat[];
const whenLoad = ref(false);

export const storesChat = defineStore("storesChat", () => {
  const Openchat = ref<ChatArray>([]);

  //ดึงข้อมูล Openchat
  async function setOpenChat(AllopenChat: ChatArray) {
    AllopenChat.forEach((chat) => {
      if (chat.chat_room && Array.isArray(chat.chat_room)) {
        const unreadCount = chat.chat_room.reduce(
          (count: number, room: any) => {
            return count + (room.unread > 0 ? 1 : 0);
          },
          0
        );

        chat.unread_room = unreadCount;
      } else {
        chat.unread_room = 0;
      }
      chat.active = false;
      chat.chat_room?.forEach((room: any, index: number) => {
        if (index === 0) room.active = true;
        else room.active = false;
      });
    });

    await setTimeout(() => {
      Openchat.value = AllopenChat;
      Openchat.value[0].active = true;
    }, 1000);
  }

  // ทำการหาห้องและเก็บไว้ใน Rooms
  const IndexofBusiness = ref(0);
  const changeBusinessChunk = (businessIndex: number) => {
    //เมื่อเปลี่ยน ธุรกิจให้เซ็ตห้องให้เป็น 0 และไม่ต้องเลือกอะไรไว้เลย
    IndexofRoom.value = 0;

    // เช็คว่ามัน null รึป่าว
    const chatRoom = Openchat.value[businessIndex]?.chat_room;
    if (Array.isArray(chatRoom)) {
      chatRoom.forEach((chat) => {
        chat.active = false;
      });

      // Check if chat_room[0] exists
      if (chatRoom[0]) {
        chatRoom[0].active = true;
      }
    }

    IndexofBusiness.value = businessIndex;

    //เซ็ต active ให้กับ business ที่เลือก
    Openchat.value.forEach((chat) => {
      chat.active = false;
    });
    Openchat.value[businessIndex].active = true;
  };

  // ทำการหาห้องและเก็บไว้ใน Rooms
  const IndexofRoom = ref(0);
  const changeRoomsChunk = (roomsIndex: number) => {
    IndexofRoom.value = roomsIndex;

    Openchat.value[IndexofBusiness.value]?.chat_room?.forEach((chat) => {
      chat.active = false;
    });

    const targetedChatRoom =
      Openchat.value[IndexofBusiness.value]?.chat_room?.[roomsIndex];
    if (targetedChatRoom) {
      targetedChatRoom.active = true;
    }
  };

  return {
    whenLoad,
    Openchat,
    setOpenChat,

    changeBusinessChunk,
    IndexofBusiness,

    IndexofRoom,
    changeRoomsChunk,
  };
});
