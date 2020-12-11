load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2008 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

var x;

// Converts a number to string respecting -0.
function stringify(n) {
  if ((1 / n) === -Infinity) return "-0";
  return String(n);
}

function f(expected, y) {
  function testEval(string, x, y) {
    var mulFunction = Function("x, y", "return " + string);
    return mulFunction(x, y);
  }
  function mulTest(expected, x, y) {
    assertEquals(expected, x * y);
    assertEquals(expected, testEval(stringify(x) + " * y", x, y));
    assertEquals(expected, testEval("x * " + stringify(y), x, y));
    assertEquals(expected, testEval(stringify(x) + " * " + stringify(y), x, y));
  }
  mulTest(expected, x, y);
  mulTest(-expected, -x, y);
  mulTest(-expected, x, -y);
  mulTest(expected, -x, -y);
  if (x === y) return;  // Symmetric cases not necessary.
  mulTest(expected, y, x);
  mulTest(-expected, -y, x);
  mulTest(-expected, y, -x);
  mulTest(expected, -y, -x);
}

x = 1024;
f(0, 0);
f(1024, 1);
f(2048, 2);
f(3072, 3);
f(4096, 4);
f(5120, 5);
f(7168, 7);
f(8192, 8);
f(9216, 9);
f(15360, 15);
f(16384, 16);
f(17408, 17);
f(31744, 31);
f(32768, 32);
f(33792, 33);
f(64512, 63);
f(65536, 64);
f(66560, 65);
f(130048, 127);
f(131072, 128);
f(132096, 129);
f(261120, 255);
f(262144, 256);
f(263168, 257);
f(523264, 511);
f(524288, 512);
f(525312, 513);
f(1047552, 1023);
f(1048576, 1024);
x = 1025;
f(0, 0);
f(1025, 1);
f(2050, 2);
f(3075, 3);
f(4100, 4);
f(5125, 5);
f(7175, 7);
f(8200, 8);
f(9225, 9);
f(15375, 15);
f(16400, 16);
f(17425, 17);
f(31775, 31);
f(32800, 32);
f(33825, 33);
f(64575, 63);
f(65600, 64);
f(66625, 65);
f(130175, 127);
f(131200, 128);
f(132225, 129);
f(261375, 255);
f(262400, 256);
f(263425, 257);
f(523775, 511);
f(524800, 512);
f(525825, 513);
f(1048575, 1023);
f(1049600, 1024);
f(1050625, 1025);
x = 2047;
f(0, 0);
f(2047, 1);
f(4094, 2);
f(6141, 3);
f(8188, 4);
f(10235, 5);
f(14329, 7);
f(16376, 8);
f(18423, 9);
f(30705, 15);
f(32752, 16);
f(34799, 17);
f(63457, 31);
f(65504, 32);
f(67551, 33);
f(128961, 63);
f(131008, 64);
f(133055, 65);
f(259969, 127);
f(262016, 128);
f(264063, 129);
f(521985, 255);
f(524032, 256);
f(526079, 257);
f(1046017, 511);
f(1048064, 512);
f(1050111, 513);
f(2094081, 1023);
f(2096128, 1024);
f(2098175, 1025);
f(4190209, 2047);
x = 2048;
f(0, 0);
f(2048, 1);
f(4096, 2);
f(6144, 3);
f(8192, 4);
f(10240, 5);
f(14336, 7);
f(16384, 8);
f(18432, 9);
f(30720, 15);
f(32768, 16);
f(34816, 17);
f(63488, 31);
f(65536, 32);
f(67584, 33);
f(129024, 63);
f(131072, 64);
f(133120, 65);
f(260096, 127);
f(262144, 128);
f(264192, 129);
f(522240, 255);
f(524288, 256);
f(526336, 257);
f(1046528, 511);
f(1048576, 512);
f(1050624, 513);
f(2095104, 1023);
f(2097152, 1024);
f(2099200, 1025);
f(4192256, 2047);
f(4194304, 2048);
x = 2049;
f(0, 0);
f(2049, 1);
f(4098, 2);
f(6147, 3);
f(8196, 4);
f(10245, 5);
f(14343, 7);
f(16392, 8);
f(18441, 9);
f(30735, 15);
f(32784, 16);
f(34833, 17);
f(63519, 31);
f(65568, 32);
f(67617, 33);
f(129087, 63);
f(131136, 64);
f(133185, 65);
f(260223, 127);
f(262272, 128);
f(264321, 129);
f(522495, 255);
f(524544, 256);
f(526593, 257);
f(1047039, 511);
f(1049088, 512);
f(1051137, 513);
f(2096127, 1023);
f(2098176, 1024);
f(2100225, 1025);
f(4194303, 2047);
f(4196352, 2048);
f(4198401, 2049);
x = 4095;
f(0, 0);
f(4095, 1);
f(8190, 2);
f(12285, 3);
f(16380, 4);
f(20475, 5);
f(28665, 7);
f(32760, 8);
f(36855, 9);
f(61425, 15);
f(65520, 16);
f(69615, 17);
f(126945, 31);
f(131040, 32);
f(135135, 33);
f(257985, 63);
f(262080, 64);
f(266175, 65);
f(520065, 127);
f(524160, 128);
f(528255, 129);
f(1044225, 255);
f(1048320, 256);
f(1052415, 257);
f(2092545, 511);
f(2096640, 512);
f(2100735, 513);
f(4189185, 1023);
f(4193280, 1024);
f(4197375, 1025);
f(8382465, 2047);
f(8386560, 2048);
f(8390655, 2049);
f(16769025, 4095);
x = 4096;
f(0, 0);
f(4096, 1);
f(8192, 2);
f(12288, 3);
f(16384, 4);
f(20480, 5);
f(28672, 7);
f(32768, 8);
f(36864, 9);
f(61440, 15);
f(65536, 16);
f(69632, 17);
f(126976, 31);
f(131072, 32);
f(135168, 33);
f(258048, 63);
f(262144, 64);
f(266240, 65);
f(520192, 127);
f(524288, 128);
f(528384, 129);
f(1044480, 255);
f(1048576, 256);
f(1052672, 257);
f(2093056, 511);
f(2097152, 512);
f(2101248, 513);
f(4190208, 1023);
f(4194304, 1024);
f(4198400, 1025);
f(8384512, 2047);
f(8388608, 2048);
f(8392704, 2049);
f(16773120, 4095);
f(16777216, 4096);
x = 4097;
f(0, 0);
f(4097, 1);
f(8194, 2);
f(12291, 3);
f(16388, 4);
f(20485, 5);
f(28679, 7);
f(32776, 8);
f(36873, 9);
f(61455, 15);
f(65552, 16);
f(69649, 17);
f(127007, 31);
f(131104, 32);
f(135201, 33);
f(258111, 63);
f(262208, 64);
f(266305, 65);
f(520319, 127);
f(524416, 128);
f(528513, 129);
f(1044735, 255);
f(1048832, 256);
f(1052929, 257);
f(2093567, 511);
f(2097664, 512);
f(2101761, 513);
f(4191231, 1023);
f(4195328, 1024);
f(4199425, 1025);
f(8386559, 2047);
f(8390656, 2048);
f(8394753, 2049);
f(16777215, 4095);
f(16781312, 4096);
f(16785409, 4097);
x = 8191;
f(0, 0);
f(8191, 1);
f(16382, 2);
f(24573, 3);
f(32764, 4);
f(40955, 5);
f(57337, 7);
f(65528, 8);
f(73719, 9);
f(122865, 15);
f(131056, 16);
f(139247, 17);
f(253921, 31);
f(262112, 32);
f(270303, 33);
f(516033, 63);
f(524224, 64);
f(532415, 65);
f(1040257, 127);
f(1048448, 128);
f(1056639, 129);
f(2088705, 255);
f(2096896, 256);
f(2105087, 257);
f(4185601, 511);
f(4193792, 512);
f(4201983, 513);
f(8379393, 1023);
f(8387584, 1024);
f(8395775, 1025);
f(16766977, 2047);
f(16775168, 2048);
f(16783359, 2049);
f(33542145, 4095);
f(33550336, 4096);
f(33558527, 4097);
f(67092481, 8191);
x = 8192;
f(0, 0);
f(8192, 1);
f(16384, 2);
f(24576, 3);
f(32768, 4);
f(40960, 5);
f(57344, 7);
f(65536, 8);
f(73728, 9);
f(122880, 15);
f(131072, 16);
f(139264, 17);
f(253952, 31);
f(262144, 32);
f(270336, 33);
f(516096, 63);
f(524288, 64);
f(532480, 65);
f(1040384, 127);
f(1048576, 128);
f(1056768, 129);
f(2088960, 255);
f(2097152, 256);
f(2105344, 257);
f(4186112, 511);
f(4194304, 512);
f(4202496, 513);
f(8380416, 1023);
f(8388608, 1024);
f(8396800, 1025);
f(16769024, 2047);
f(16777216, 2048);
f(16785408, 2049);
f(33546240, 4095);
f(33554432, 4096);
f(33562624, 4097);
f(67100672, 8191);
f(67108864, 8192);
x = 8193;
f(0, 0);
f(8193, 1);
f(16386, 2);
f(24579, 3);
f(32772, 4);
f(40965, 5);
f(57351, 7);
f(65544, 8);
f(73737, 9);
f(122895, 15);
f(131088, 16);
f(139281, 17);
f(253983, 31);
f(262176, 32);
f(270369, 33);
f(516159, 63);
f(524352, 64);
f(532545, 65);
f(1040511, 127);
f(1048704, 128);
f(1056897, 129);
f(2089215, 255);
f(2097408, 256);
f(2105601, 257);
f(4186623, 511);
f(4194816, 512);
f(4203009, 513);
f(8381439, 1023);
f(8389632, 1024);
f(8397825, 1025);
f(16771071, 2047);
f(16779264, 2048);
f(16787457, 2049);
f(33550335, 4095);
f(33558528, 4096);
f(33566721, 4097);
f(67108863, 8191);
f(67117056, 8192);
f(67125249, 8193);
x = 16383;
f(0, 0);
f(16383, 1);
f(32766, 2);
f(49149, 3);
f(65532, 4);
f(81915, 5);
f(114681, 7);
f(131064, 8);
f(147447, 9);
f(245745, 15);
f(262128, 16);
f(278511, 17);
f(507873, 31);
f(524256, 32);
f(540639, 33);
f(1032129, 63);
f(1048512, 64);
f(1064895, 65);
f(2080641, 127);
f(2097024, 128);
f(2113407, 129);
f(4177665, 255);
f(4194048, 256);
f(4210431, 257);
f(8371713, 511);
f(8388096, 512);
f(8404479, 513);
f(16759809, 1023);
f(16776192, 1024);
f(16792575, 1025);
f(33536001, 2047);
f(33552384, 2048);
f(33568767, 2049);
f(67088385, 4095);
f(67104768, 4096);
f(67121151, 4097);
f(134193153, 8191);
f(134209536, 8192);
f(134225919, 8193);
f(268402689, 16383);
x = 16384;
f(0, 0);
f(16384, 1);
f(32768, 2);
f(49152, 3);
f(65536, 4);
f(81920, 5);
f(114688, 7);
f(131072, 8);
f(147456, 9);
f(245760, 15);
f(262144, 16);
f(278528, 17);
f(507904, 31);
f(524288, 32);
f(540672, 33);
f(1032192, 63);
f(1048576, 64);
f(1064960, 65);
f(2080768, 127);
f(2097152, 128);
f(2113536, 129);
f(4177920, 255);
f(4194304, 256);
f(4210688, 257);
f(8372224, 511);
f(8388608, 512);
f(8404992, 513);
f(16760832, 1023);
f(16777216, 1024);
f(16793600, 1025);
f(33538048, 2047);
f(33554432, 2048);
f(33570816, 2049);
f(67092480, 4095);
f(67108864, 4096);
f(67125248, 4097);
f(134201344, 8191);
f(134217728, 8192);
f(134234112, 8193);
f(268419072, 16383);
f(268435456, 16384);
