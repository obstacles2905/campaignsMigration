module.exports = {
  campaignId: "mtu20812",
  campaignName: "mtu20812",
  campaignType: "experiment",
  groupId: 1,
  params: {
    protocol: "http",
    domain: "t.insigit.com",
    path: "/tds",
    requestLimitPerSec: 300,
    incomeUrl: ""
  },
  placeholders: [],
  dataSources: ["mailbox", "cupol"],
  fallback:
    "/tds?tdsId=r7158shy_r&tds_campaign=r7158shy&s1=29_mtu20812_ww&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
  tags: [{ name: "HIT_EMAIL" }],
  schemes: [
    {
      class: "generalScheme",
      id: "r",
      path: { splitId: null },
      bullets: [
        {
          class: "OfferModel",
          id: "a",
          eventType: "hit",
          routeToSchemeId: "mtu20812_a_targetingpidexists"
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_targetingpidexists",
      path: { splitId: "a" },
      rouletteType: "targeting",
      bullets: [
        {
          class: "OfferModel",
          id: "jump",
          routeToSchemeId: "mtu20812_a_jumpnew",
          conditions: [
            { filter: "pidexists", type: "in", value: [false] },
            {
              filter: "device",
              param: "platform",
              type: "in",
              value: ["mobile"]
            },
            {
              filter: "location",
              param: "geoposition",
              type: "in",
              value: [{ country: "usa", regions: [] }]
            }
          ]
        },
        {
          class: "OfferModel",
          id: "route",
          routeToSchemeId: "mtu20812_a_targeting",
          conditions: [
            {
              filter: "device",
              param: "platform",
              type: "in",
              value: ["mobile"]
            },
            {
              filter: "location",
              param: "geoposition",
              type: "in",
              value: [{ country: "usa", regions: [] }]
            }
          ]
        },
        {
          class: "OfferModel",
          id: "non-target",
          location:
            "/tds?tdsId=r7158shy_r&tds_campaign=r7158shy&s1=29_mtu20812_nt&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
          eventType: "visit",
          conditions: []
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_targeting",
      path: { splitId: "a" },
      rouletteType: "targeting",
      bullets: [
        {
          class: "OfferModel",
          id: "hasconversionon",
          location:
            "/tds?tdsId=r6540gol_r&tds_campaign=r6540gol&s1=29_mtu20812_ex&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
          eventType: "tds_site_group_choice",
          conditions: [
            {
              filter: "userData",
              param: "hasconversionon",
              type: "contains all",
              value: ["hh", "flirt", "maff"]
            }
          ]
        },
        {
          class: "OfferModel",
          id: "everpaid",
          location: "/tds?tdsId=g2038gol_r&tds_campaign=g2038gol&email={email}",
          eventType: "tds_site_group_choice",
          conditions: [
            { filter: "profile", param: "totalPayments", type: "gt", value: 0 }
          ]
        },
        {
          class: "OfferModel",
          id: "reg",
          routeToSchemeId: "mtu20812_a_choice_reg",
          conditions: [
            {
              filter: "device",
              param: "platform",
              type: "in",
              value: ["mobile"]
            }
          ]
        }
      ]
    },
    {
      class: "brandScheme",
      id: "a_choice_reg",
      path: { splitId: "a" },
      dataSourceKey: "dbinfomail",
      options: { amountOfRegistrations: 3 },
      lastBullet: {
        class: "OfferModel",
        location:
          "https://time-to-sex.com/tds?tdsId=g3672gol_r&tds_campaign=g3672gol&s1={s1}&s2={email}&s3={s3}&s4={s4}&s5={s5}&utm_term=mob_fl_usa_mtu20812&utm_source=dda&utm_campaign=vo_bm&email={email}",
        eventType: "tds_site_group_choice",
        solution: "reg"
      },
      bullets: [
        { class: "OfferModel", id: "jump", routeToSchemeId: "mtu20812_a_jump" }
  ]
    },
    {
      class: "generalScheme",
      id: "a_jump",
      path: { splitId: "a" },
      bullets: [
        {
          class: "AdsbridgeOfferModel",
          id: "22682",
          weight: 70,
          backoffer: "b5714gol_r",
          routeToSchemeId: "mtu20812_a_targetingextra"
        },
        {
          class: "AdsbridgeOfferModel",
          id: "22684",
          weight: 30,
          backoffer: "b5714gol_r",
          routeToSchemeId: "mtu20812_a_targetingextra"
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_jumpnew",
      path: { splitId: "a" },
      bullets: [
        {
          class: "AdsbridgeOfferModel",
          id: "21628",
          weight: 70,
          backoffer: "b5714gol_r",
          routeToSchemeId: "mtu20812_a_targetingextra"
        },
        {
          class: "AdsbridgeOfferModel",
          id: "21625",
          weight: 30,
          backoffer: "b5714gol_r",
          routeToSchemeId: "mtu20812_a_targetingextra"
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_targetingextra",
      path: { splitId: "a" },
      rouletteType: "targeting",
      bullets: [
        {
          class: "OfferModel",
          id: "skipjump",
          location:
            "/tds?tdsId=r4178gol_r&tds_campaign=r4178gol&s1=29_mtu20812_ex&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
          eventType: "tds_site_group_choice",
          conditions: [
            { filter: "query", param: "skip", type: "in", value: ["true"] }
          ]
        },
        {
          class: "OfferModel",
          id: "chargeback",
          location:
            "/tds?tdsId=r7982gol_r&tds_campaign=r7982gol&s1=29_mtu20812_ex&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
          eventType: "tds_site_group_choice",
          conditions: [
            { filter: "profile", param: "chargeback", type: "in", value: [1] }
          ]
        },
        {
          class: "OfferModel",
          id: "femalehetero",
          location:
            "/tds?tdsId=r0073gol_r&tds_campaign=r0073gol&s1=29_mtu20812_wr&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
          eventType: "tds_site_group_choice",
          conditions: [
            {
              filter: "social",
              param: "gender",
              type: "in",
              value: ["female"]
            },
            {
              filter: "social",
              param: "sexualorientation",
              type: "in",
              value: ["hetero"]
            }
          ]
        },
        {
          class: "OfferModel",
          id: "age",
          location:
            "/tds?tdsId=r9584gol_r&tds_campaign=r9584gol&s1=29_mtu20812_yp&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
          eventType: "tds_site_group_choice",
          conditions: [
            { filter: "social", param: "age", type: "in", value: [18] }
          ]
        },
        {
          class: "OfferModel",
          id: "regapi",
          routeToSchemeId: "mtu20812_a_choice_regapi",
          conditions: [
            {
              filter: "device",
              param: "platform",
              type: "in",
              value: ["mobile"]
            }
          ]
        }
      ]
    },
    {
      class: "brandScheme",
      id: "a_choice_regapi",
      path: { splitId: "a" },
      dataSourceKey: "dbinfomail",
      options: { disableAutologin: true },
      bullets: [
        {
          class: "TdsSiteGroupOfferModel",
          action: "PhoenixRegistrationApiTdsCall",
          actionParams: {
            site: "hellohotties.com",
            utm_ex: "a",
            utm_source: "dda",
            utm_medium: "mob",
            utm_funnel: "tds"
          },
          routeToSchemeId: "mtu20812_a_lp_regapi_hh"
        },
        {
          class: "TdsSiteGroupOfferModel",
          action: "PhoenixRegistrationApiTdsCall",
          actionParams: {
            site: "together2night.com",
            utm_ex: "a",
            utm_source: "dda",
            utm_medium: "mob",
            utm_funnel: "tds"
          },
          routeToSchemeId: "mtu20812_a_lp_regapi_t2n"
        },
        {
          class: "TdsSiteGroupOfferModel",
          action: "PhoenixRegistrationApiTdsCall",
          actionParams: {
            site: "maturesforfuck.com",
            utm_ex: "a",
            utm_source: "dda",
            utm_medium: "mob",
            utm_funnel: "tds"
          },
          routeToSchemeId: "mtu20812_a_lp_regapi_maff"
        },
        {
          class: "TdsSiteGroupOfferModel",
          id: "resale",
          routeToSchemeId: "mtu20812_a_resale1"
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_lp_regapi_hh",
      path: { splitId: "a" },
      bullets: [
        {
          class: "LandingPageOfferModel",
          location:
            "https://m.hellohotties.com/aff.php?dynamicpage=all_mlp_5st_violet_a"
        },
        {
          class: "LandingPageOfferModel",
          location:
            "https://m.hellohotties.com/aff.php?dynamicpage=all_mlp_mst_blowjobvideo_a&pHash=iczz4-v-t"
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_lp_regapi_t2n",
      path: { splitId: "a" },
      bullets: [
        {
          class: "LandingPageOfferModel",
          location:
            "https://m.together2night.com/aff.php?dynamicpage=all_mlp_mst_blowjobvideo_a_email",
          weight: 70
        },
        {
          class: "LandingPageOfferModel",
          location:
            "https://m.together2night.com/aff.php?dynamicpage=all_mlp_5st_accordion_a_email",
          weight: 30
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_lp_regapi_maff",
      path: { splitId: "a" },
      bullets: [
        {
          class: "LandingPageOfferModel",
          location:
            "https://m.maturesforfuck.com/aff.php?dynamicpage=all_mlp_5st_violet_a_email"
        }
      ]
    },
    {
      class: "generalScheme",
      id: "a_resale1",
      path: { splitId: "a" },
      bullets: [
        {
          class: "OfferModel",
          id: "resale1",
          location:
            "/tds?tdsId=r6540gol_r&tds_campaign=r6540gol&s1=29_mtu20812_ex&s2={email}&s3={tds_oid}&s4={s4}&s5={tds_cid}",
          eventType: "click"
        }
      ]
    }
  ]
};
