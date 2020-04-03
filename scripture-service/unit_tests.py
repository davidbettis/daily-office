#!/usr/local/bin/python3
# -*- coding: utf-8 -*-

import logging
import unittest
from lambda_function import splitByVerse

class TestVerseParsing(unittest.TestCase):

    def test_basic(self):
        self.assertEqual(splitByVerse("[1] foo [2] bar"), [{'verse': '1', 'text': ['foo']}, {'verse': '2', 'text': ['bar']}])

    def test_extra_padding(self):
        self.assertEqual(splitByVerse("[1] foo       [2] bar"), [{'verse': '1', 'text': ['foo']}, {'verse': '2', 'text': ['bar']}])

    def test_newlines(self):
        self.assertEqual(splitByVerse("[1] foo\nbar\nbaz"), [{'verse': '1', 'text': ['foo', 'bar', 'baz']}])

    def test_empty(self):
        self.assertEqual(splitByVerse(" [1] [2] foo"), [{'verse': '1', 'text': ['']}, {'verse': '2', 'text': ['foo']}])

    def test_unparsable(self):
        self.assertEqual(splitByVerse("foo bar baz"), [])

unittest.main()
