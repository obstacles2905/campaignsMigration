"use strict";
const fixture = require("../fixtures/mtu20812");
const ALLOWED_NAMING = [
  "a_choice_reg", "a_choice_regaextra", "b_choice_reg"
];

class RegAmountTargetingFilter {
  _apply() {
    const {schemes} = fixture;

    const elementWithRegLayer = schemes.find(
      element => element.bullets.find(subElement => subElement.id === "reg")
    );

    if (!elementWithRegLayer) {
      return;
    }

    const choiceRegBullet = schemes.find(bullet => ALLOWED_NAMING.includes(bullet.id));
    const choiceRegBulletAttributes = this._getChoiceAttributes(choiceRegBullet);

    const targetingRegBullet = elementWithRegLayer.bullets.find(bullet => bullet.id === "reg");
    const transformedRegBullet = this._transformRegBullet(targetingRegBullet, choiceRegBulletAttributes);

    const routeLayer = this._generateRouteLayer(choiceRegBulletAttributes);

  }

  _getChoiceAttributes(bullet) {
    return {
      regAmount: bullet.options.amountOfRegistrations,
      location: bullet.lastBullet.location,
      eventType: bullet.lastBullet.eventType,
      routeToSchemeId: bullet.bullets[0].routeToSchemeId
    }
  }

  _transformRegBullet(bullet, attributes) {
    const conditions = [{
      filter: "regAmount",
      type: "gt",
      value: [attributes.regAmount]
    }];

    bullet.location = attributes.location;
    bullet.eventType = attributes.eventType;
    bullet.conditions = conditions;

    delete bullet.routeToSchemeId;

    return bullet;
  }

  _generateRouteLayer(attributes) {
    return {
      class: "OfferModel",
      id: "route",
      routeToSchemeId: attributes.routeToSchemeId,
      conditions: [

      ]
    }
  }
}

module.exports = RegAmountTargetingFilter;