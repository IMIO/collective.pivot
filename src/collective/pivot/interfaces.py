# -*- coding: utf-8 -*-
"""Module where all interfaces, events and exceptions live."""

from collective.pivot import _
from plone import schema
from zope.publisher.interfaces.browser import IDefaultBrowserLayer
from zope.interface import Interface


class ICollectivePivotLayer(IDefaultBrowserLayer):
    """Marker interface that defines a browser layer."""


class ICollectivePivotSettings(Interface):

    ws_url = schema.TextLine(title=_(u"Webservice url"), required=True)
