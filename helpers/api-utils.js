import axios from "axios";

export async function getAllEvents() {
  const response = await axios.get(
    "https://nextjs-course-d521f-default-rtdb.firebaseio.com/events.json"
  );

  const allEvents = response.data;
  const events = [];
  for (const key in allEvents) {
    events.push({
      id: key,
      ...allEvents[key]
    });
  }
  return events
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
  return allEvents.filter((event) => event.isFeatured);
}
export async function getEventById(id) {
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
  }
