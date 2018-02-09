import EventsNormalizer from 'Parser/Core/EventsNormalizer';

import isAtonement from '../Modules/Core/isAtonement';

class AtonementOnSelfNormalizer extends EventsNormalizer {

  damageEvents = [];

  normalize(events) {
    const fixedEvents = [];
    events.forEach((event, eventIndex) => {

      if(event.type === "damage" && event.sourceIsFriendly && !event.targetIsFriendly){
        this.damageEvents.push({amount: event.amount, name: event.ability.name});
        this.damageEvents[this.damageEvents.length -1].HealingAssociated = [];
        return;
      }

      if(event.type === "heal" && isAtonement(event)) {
        this.damageEvents[this.damageEvents.length -1].HealingAssociated.push(event.amount + (event.overheal || 0));
      }

      fixedEvents.push(event);
    });
    console.log(fixedEvents);
    console.log(this.damageEvents);
    return fixedEvents;
  }
}
export default AtonementOnSelfNormalizer;
