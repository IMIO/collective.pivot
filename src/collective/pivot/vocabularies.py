# -*- coding: utf-8 -*-
from collective.pivot import _
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary


class FamilyVocabularyFactory:
    def __call__(self, context):
        family = [
            ("OTH-A0-003P-2PWS", _("Hosting")),
            ("OTH-A0-003P-2QH4", _("Leisure / discovery")),
            ("OTH-A0-003P-2QHT", _("Tourism organizations")),
            ("OTH-A0-003P-2QHH", _("Terroir")),
            ("OTH-A0-003P-2QL2", _("Events")),
        ]
        terms = [
            SimpleTerm(value=pair[0], token=pair[0], title=pair[1])
            for pair in family
        ]
        return SimpleVocabulary(terms)


familyvocabulary = FamilyVocabularyFactory()
