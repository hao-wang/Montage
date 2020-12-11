load("0d8683db8b3792521a65ad1edba9cf82.js");
load("dada5190587903f93a3604016a6099ce.js");
load("60699afe5b794b4c3e7c5edd87eb4d83.js");
load("c60886cf155c958be1ed60202834486a.js");
/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Rhino code, released
 * May 6, 1999.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1997-2000
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Igor Bukanov
 *   Ethan Hugg
 *   Milen Nankov
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

gTestfile = '11.1.2.js';

START("11.1.2 - Qualified Identifiers");

x =
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
    soap:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
    <soap:Body>
        <m:getLastTradePrice xmlns:m="http://mycompany.com/stocks">
            <symbol>DIS</symbol>
        </m:getLastTradePrice>
    </soap:Body>
</soap:Envelope>;   

soap = new Namespace("http://schemas.xmlsoap.org/soap/envelope/");
stock = new Namespace("http://mycompany.com/stocks");

encodingStyle = x.@soap::encodingStyle;
TEST_XML(1, "http://schemas.xmlsoap.org/soap/encoding/", encodingStyle);

correct =
<soap:Body xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <m:getLastTradePrice xmlns:m="http://mycompany.com/stocks">
        <symbol>DIS</symbol>
    </m:getLastTradePrice>
</soap:Body>;

body = x.soap::Body;
TEST_XML(2, correct.toXMLString(), body);

body = x.soap::["Body"];
TEST_XML(3, correct.toXMLString(), body);

q = new QName(soap, "Body");
body = x[q];
TEST_XML(4, correct.toXMLString(), body);

correct =
<symbol xmlns:m="http://mycompany.com/stocks" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">MYCO</symbol>;

x.soap::Body.stock::getLastTradePrice.symbol = "MYCO";
TEST_XML(5, correct.toXMLString(), x.soap::Body.stock::getLastTradePrice.symbol);

END();
