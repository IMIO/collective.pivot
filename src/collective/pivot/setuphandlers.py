# -*- coding: utf-8 -*-
from collective.pivot.utils import _
from collective.pivot.utils import add_category
from plone import api
from Products.CMFPlone.interfaces import INonInstallable
from zope.interface import implementer

PIVOT_FOLDER = "Pivot"


@implementer(INonInstallable)
class HiddenProfiles(object):
    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller."""
        return [
            "collective.pivot:uninstall",
        ]


def post_install(context):
    """Post install script"""
    site = api.portal.get()
    if not site.get(PIVOT_FOLDER):
        folder = api.content.create(
            type="Folder",
            container=site,
            title=_(PIVOT_FOLDER, context=site),
        )
        add_default_categories(folder)


def uninstall(context):
    """Uninstall script"""
    # Do something at the end of the uninstallation of this package.


def add_default_categories(context):
    """Add Pivot categories"""
    add_category(context, "urn:fam:1", _("Hosting", context=context))
    add_category(context, "urn:fam:2", _("Leisure / discovery", context=context))
    add_category(context, "urn:fam:3", _("Tourism organizations", context=context))
    add_category(context, "urn:fam:6", _("Terroir", context=context))
