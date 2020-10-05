# -*- coding: utf-8 -*-
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import (
    applyProfile,
    FunctionalTesting,
    IntegrationTesting,
    PLONE_FIXTURE
    PloneSandboxLayer,
)
from plone.testing import z2

import collective.pivot


class CollectivePivotLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        import plone.app.dexterity
        self.loadZCML(package=plone.app.dexterity)
        import plone.restapi
        self.loadZCML(package=plone.restapi)
        self.loadZCML(package=collective.pivot)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'collective.pivot:default')


COLLECTIVE_PIVOT_FIXTURE = CollectivePivotLayer()


COLLECTIVE_PIVOT_INTEGRATION_TESTING = IntegrationTesting(
    bases=(COLLECTIVE_PIVOT_FIXTURE,),
    name='CollectivePivotLayer:IntegrationTesting',
)


COLLECTIVE_PIVOT_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(COLLECTIVE_PIVOT_FIXTURE,),
    name='CollectivePivotLayer:FunctionalTesting',
)


COLLECTIVE_PIVOT_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        COLLECTIVE_PIVOT_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE,
    ),
    name='CollectivePivotLayer:AcceptanceTesting',
)
