# -*- coding: utf-8 -*-
from eea.facetednavigation.subtypes.interfaces import IFacetedNavigable
from plone.dexterity.content import Container
from plone.supermodel import model
from zope import schema
from zope.interface import implementer

from collective.pivot import _


class IPivotCategory(model.Schema, IFacetedNavigable):
    """ Marker interface for PivotCategory
    """

    category_id = schema.TextLine(title=_(u"Category id"), required=True)


@implementer(IPivotCategory)
class PivotCategory(Container):
    """ Pivot Category container class
    """
