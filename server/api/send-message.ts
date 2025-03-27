import { defineEventHandler, readBody } from 'h3';
import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN!, { polling: false });
const userIds = [1139358699, 5325755302, 645003802];

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    if (!body.name || !body.phone) {
      throw new Error('Имя и номер телефона обязательны');
    }

    const message = `Имя: ${body.name}\nНомер: ${body.phone}\nДоп информация: ${body.info || 'Нет'}`;

    await Promise.all(userIds.map(id => bot.sendMessage(id, message)));

    return { success: true, message: 'Сообщение отправлено' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
});
