# -*- coding: utf-8 -*-
from plone.dexterity.content import Container
from plone.supermodel import model
from zope import schema
from zope.interface import implementer

from collective.pivot import _


class IPivotCategory(model.Schema):
    """ Marker interface for PivotCategory
    """

    category_id = schema.TextLine(title=_(u"Category id"), required=True)
    zip_codes = schema.List(
        title=_(u"Zip codes"),
        description=_(
            u"Leave empty if you want to get zip codes from global settings."
        ),
        value_type=schema.TextLine(title=_(u"Zip code")),
        required=False,
    )


@implementer(IPivotCategory)
class PivotCategory(Container):
    """ Pivot Category container class
    """
