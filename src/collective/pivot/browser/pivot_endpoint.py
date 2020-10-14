# -*- coding: utf-8 -*-
from collective.pivot.browser.controlpanel import IPivotSettings
from plone.registry.interfaces import IRegistry
from plone.rest import Service
from zope.component import getUtility

import requests


class PivotEndpointGet(Service):

    language = "fr"

    def render(self):
        headers = {"Accept": "application/json", "ws_key": self.settings.ws_key}
        results = requests.get(self.query_url, headers=headers)
        items = results.json()
        formated_datas = []
        for offre in items.get("offre"):
            sheet = {
                "title": offre.get("nom"),
                "category": self.getTypeOffre(offre),
                "latitude": offre.get("adresse1").get("latitude"),
                "longitude": offre.get("adresse1").get("longitude"),
            }
            formated_datas.append(sheet)
        total_datas = len(formated_datas)
        if total_datas != items.get("count"):
            raise AssertionError("Missing some datas")
        return {"items": formated_datas, "items_total": total_datas}

    def getTypeOffre(self, offre):
        type_offre = offre.get("typeOffre")
        gen = (
            label
            for label in type_offre.get("label")
            if label.get("lang") == self.language
        )
        label = next(gen).get("value")
        return label

    @property
    def settings(self):
        registry = getUtility(IRegistry)
        return registry.forInterface(IPivotSettings)

    @property
    def query_url(self):
        cp = "cp:{}".format("|".join(self.zip_codes))
        return "{}query/{};content=1;pretty=true;fmt=json;param={}".format(
            self.ws_url, self.context.category_id, cp
        )

    @property
    def ws_url(self):
        return self.settings.ws_url

    @property
    def zip_codes(self):
        if self.context.zip_codes is not None:
            return self.context.zip_codes
        else:
            return self.settings.zip_codes

    @property
    def ws_key(self):
        return self.settings.ws_key

    @property
    def test_config(self):
        if self.zip_codes is None:
            return False
        if self.ws_url is None:
            return False
        if self.ws_key is None:
            return False
        return True
