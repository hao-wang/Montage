load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

   
function TestObject ()
{
  /* A warm, dry place for properties and methods to live */
}

TestObject.prototype._y = "<initial y>";
   
Object.defineProperty(TestObject.prototype, "y",
{
  enumerable: true, configurable: true,
  get: function get_y ()
  {
    var rv;
    if (typeof this._y == "string")
      rv = "got " + this._y;
    else
      rv = this._y;
    return rv;
  },
  set: function set_y (newVal) { this._y = newVal; }
});


test(new TestObject());

function test(t)
{
  enterFunc ("test");
   
  printStatus ("Basic Getter/ Setter test");
  reportCompare ("<initial y>", t._y, "y prototype check");

  reportCompare ("got <initial y>", t.y, "y getter, before set");

  t.y = "new y";
  reportCompare ("got new y", t.y, "y getter, after set");

  t.y = 2;
  reportCompare (2, t.y, "y getter, after numeric set");

  var d = new Date();
  t.y = d;
  reportCompare (d, t.y, "y getter, after date set");

}
