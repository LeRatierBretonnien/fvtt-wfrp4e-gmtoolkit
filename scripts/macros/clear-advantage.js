/* Resets Advantage for the selected token to 0 */

if (!token)
  return ui.notifications.error("Please select a token first.");

actor.update({"data.status.advantage.value" : 0})
ui.notifications.notify(`Advantage reset to 0 for ${actor.data.name}.`)