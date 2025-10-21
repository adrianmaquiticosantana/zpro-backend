'use strict';
const _0x4268b0 = _0xffec;
(function (_0x51d0b0, _0x65f83b) {
    const _0x2b1205 = _0xffec, _0x531573 = _0x51d0b0();
    while (!![]) {
        try {
            const _0x4b5e91 = -parseInt(_0x2b1205(0x70)) / (-0x82d + -0x3 * 0x6a5 + -0x1c1d * -0x1) * (-parseInt(_0x2b1205(0x69)) / (0x2 * 0x9a4 + -0x892 + -0xab4)) + -parseInt(_0x2b1205(0x8b)) / (-0x28 + 0x100c + -0xfe1) * (parseInt(_0x2b1205(0x6b)) / (0xe2f + -0x1400 + 0x5d5)) + parseInt(_0x2b1205(0x72)) / (0x3a9 * -0x9 + -0x5ef + -0x26e5 * -0x1) + -parseInt(_0x2b1205(0x76)) / (-0x1 * -0x281 + 0x10db + -0x1356) + parseInt(_0x2b1205(0x77)) / (0x1e1a + 0x10 * 0x255 + -0x1 * 0x4363) + parseInt(_0x2b1205(0x87)) / (-0x6da * -0x2 + 0xe71 * -0x2 + -0xb1 * -0x16) * (-parseInt(_0x2b1205(0x6d)) / (0x2 * -0x652 + 0x76 + 0x3b * 0x35)) + -parseInt(_0x2b1205(0x7d)) / (0x883 + 0x23c1 + 0xde * -0x33);
            if (_0x4b5e91 === _0x65f83b)
                break;
            else
                _0x531573['push'](_0x531573['shift']());
        } catch (_0x3b47ac) {
            _0x531573['push'](_0x531573['shift']());
        }
    }
}(_0x29d3, -0xb194b + 0x51d8f + 0x10a36c));
const _0x51ff61 = {};
function _0xffec(_0xd683cf, _0xb264b7) {
    const _0xa372ad = _0x29d3();
    return _0xffec = function (_0x194ac6, _0x46249b) {
        _0x194ac6 = _0x194ac6 - (-0x1082 + 0x1b9f + 0x1 * -0xab5);
        let _0x440408 = _0xa372ad[_0x194ac6];
        return _0x440408;
    }, _0xffec(_0xd683cf, _0xb264b7);
}
function _0x29d3() {
    const _0x85a061 = [
        '9496FCBonb',
        'UftET',
        'lets',
        'RXNpr',
        '253899xKsMnp',
        'createTabl',
        'hsiiO',
        'DataTypes',
        '128IXLRUx',
        'LQSbt',
        '4JCngLl',
        'sequelize',
        '9819yOiZoD',
        'Contacts',
        'dropTable',
        '17196LOWVrL',
        '__esModule',
        '2698250HFXAuQ',
        'ContactWal',
        'CASCADE',
        'INTEGER',
        '2419482lADzmq',
        '8565599qwhgtC',
        'autoIncrem',
        'type',
        'primaryKey',
        'exports',
        'IpOrM',
        '3826660WCtaBp',
        'Tenants',
        'DATE',
        'erty',
        'defineProp',
        'Users',
        'value',
        'XjVKG',
        'allowNull',
        'ent'
    ];
    _0x29d3 = function () {
        return _0x85a061;
    };
    return _0x29d3();
}
_0x51ff61[_0x4268b0(0x83)] = !![], Object[_0x4268b0(0x81) + _0x4268b0(0x80)](exports, _0x4268b0(0x71), _0x51ff61);
const sequelize_1 = require(_0x4268b0(0x6c));
module[_0x4268b0(0x7b)] = {
    'up': _0x468b51 => {
        const _0x3b4c31 = _0x4268b0, _0x342724 = {};
        _0x342724[_0x3b4c31(0x8a)] = _0x3b4c31(0x73) + _0x3b4c31(0x89), _0x342724[_0x3b4c31(0x84)] = _0x3b4c31(0x82), _0x342724[_0x3b4c31(0x7c)] = _0x3b4c31(0x74), _0x342724[_0x3b4c31(0x8d)] = _0x3b4c31(0x6e), _0x342724[_0x3b4c31(0x88)] = _0x3b4c31(0x7e);
        const _0x178ae4 = _0x342724, _0x5ed1fb = {};
        return _0x5ed1fb[_0x3b4c31(0x79)] = sequelize_1[_0x3b4c31(0x68)][_0x3b4c31(0x75)], _0x5ed1fb[_0x3b4c31(0x78) + _0x3b4c31(0x86)] = !![], _0x5ed1fb[_0x3b4c31(0x7a)] = !![], _0x5ed1fb[_0x3b4c31(0x85)] = ![], _0x468b51[_0x3b4c31(0x8c) + 'e'](_0x178ae4[_0x3b4c31(0x8a)], {
            'id': _0x5ed1fb,
            'walletId': {
                'type': sequelize_1[_0x3b4c31(0x68)][_0x3b4c31(0x75)],
                'references': {
                    'model': _0x178ae4[_0x3b4c31(0x84)],
                    'key': 'id'
                },
                'onUpdate': _0x178ae4[_0x3b4c31(0x7c)],
                'onDelete': _0x178ae4[_0x3b4c31(0x7c)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[_0x3b4c31(0x68)][_0x3b4c31(0x75)],
                'references': {
                    'model': _0x178ae4[_0x3b4c31(0x8d)],
                    'key': 'id'
                },
                'onUpdate': _0x178ae4[_0x3b4c31(0x7c)],
                'onDelete': _0x178ae4[_0x3b4c31(0x7c)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[_0x3b4c31(0x68)][_0x3b4c31(0x75)],
                'references': {
                    'model': _0x178ae4[_0x3b4c31(0x88)],
                    'key': 'id'
                },
                'onUpdate': _0x178ae4[_0x3b4c31(0x7c)],
                'onDelete': _0x178ae4[_0x3b4c31(0x7c)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x3b4c31(0x68)][_0x3b4c31(0x7f)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x3b4c31(0x68)][_0x3b4c31(0x7f)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x203187 => {
        const _0x41ad28 = _0x4268b0, _0x29b6d3 = {};
        _0x29b6d3[_0x41ad28(0x6a)] = _0x41ad28(0x73) + _0x41ad28(0x89);
        const _0x38dfa3 = _0x29b6d3;
        return _0x203187[_0x41ad28(0x6f)](_0x38dfa3[_0x41ad28(0x6a)]);
    }
};