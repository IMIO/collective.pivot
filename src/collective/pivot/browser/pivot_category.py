# -*- coding: utf-8 -*-
from collective.pivot.browser.controlpanel import IPivotSettings
from plone.registry.interfaces import IRegistry
from Products.Five import BrowserView
from zope.component import getUtility


class PivotCategoryView(BrowserView):
    """
    """

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
    def thesaurus_url(self):
        """
        https://pivotweb.tourismewallonie.be/PivotWeb-3.1/thesaurus/family/urn:fam:1;pretty=true;fmt=json
        """
        cp = "cp:{}".format("|".join(self.zip_codes))
        return "{}thesaurus/family/{};content=1;pretty=true;fmt=json;param={}".format(
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
