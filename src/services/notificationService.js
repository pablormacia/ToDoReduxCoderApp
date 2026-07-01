import * as Notifications from "expo-notifications";

export async function scheduleTaskNotification(title) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📝 Recordatorio",
      body: title,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 5,
      channelId: "default",
    },
  });
}