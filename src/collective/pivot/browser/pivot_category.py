from plone import api
from Products.Five import BrowserView


class PivotCategoryView(BrowserView):
    """
    """

    @property
    def full_url_query(self):
        return "{}{}".format(self.ws_url, self.context.category_id)

    @property
    def ws_url(self):
        return api.portal.get_registry_record(
            "collective.pivot.interfaces.ICollectivePivotSettings.ws_url"
        )

    @property
    def ws_key(self):
        return api.portal.get_registry_record(
            "collective.pivot.interfaces.ICollectivePivotSettings.ws_key"
        )


# ;content=1;fmt=json' \
# --header 'ws_key: 1b24b1ce-3c3f-405f-8881-56721a0017b3'
