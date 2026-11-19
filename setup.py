# -*- coding: utf-8 -*-
"""Installer for the collective.pivot package."""

from setuptools import find_namespace_packages
from setuptools import setup


long_description = "\n\n".join(
    [
        open("README.rst").read(),
        open("CONTRIBUTORS.rst").read(),
        open("CHANGES.rst").read(),
    ]
)


setup(
    name="collective.pivot",
    version="2.0.1.dev0",
    description="Display CGT Pivot informations",
    long_description=long_description,
    # Get more from https://pypi.org/classifiers/
    classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: Addon",
        "Framework :: Plone :: 6.2",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Programming Language :: Python :: 3.13",
        "Programming Language :: Python :: 3.14",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
    ],
    keywords="Python Plone CMS",
    author="Christophe Boulanger",
    author_email="christophe.boulanger@imio.be",
    url="https://github.com/IMIO/collective.pivot",
    project_urls={
        "PyPI": "https://pypi.python.org/pypi/collective.pivot",
        "Source": "https://github.com/IMIO/collective.pivot",
        "Tracker": "https://github.com/IMIO/collective.pivot/issues",
        # 'Documentation': 'https://collective.pivot.readthedocs.io/en/latest/',
    },
    license="GPL version 2",
    packages=find_namespace_packages("src", exclude=["ez_setup"]),
    package_dir={"": "src"},
    include_package_data=True,
    zip_safe=False,
    python_requires=">=3.10",
    install_requires=[
        "setuptools",
        # -*- Extra requirements: -*-
        "z3c.jbot",
        "Products.GenericSetup>=1.8.2",
        "plone.api>=1.8.4",
        "plone.restapi",
        "plone.app.dexterity",
        "plone.app.relationfield",
        "plone.app.lockingbehavior",
        "plone.schema",
        "requests",
    ],
    extras_require={
        "test": [
            "plone.app.testing",
            # Plone KGS does not use this version, because it would break
            # Remove if your package shall be part of coredev.
            # plone_coredev tests as of 2016-04-01.
            "plone.testing>=5.0.0",
            "plone.app.robotframework[debug]",
            "requests-mock",
        ],
    },
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    [console_scripts]
    update_locale = collective.pivot.locales.update:update_locale
    """,
)
