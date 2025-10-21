'use strict';
const _0x2ffaf1 = _0x2e92;
(function (_0x5dd0b8, _0x3ce8d3) {
    const _0x2d4e29 = _0x2e92, _0x4393d6 = _0x5dd0b8();
    while (!![]) {
        try {
            const _0x1f29d4 = parseInt(_0x2d4e29(0xda)) / (-0x4c7 * 0x1 + 0xab9 + 0x1fb * -0x3) + -parseInt(_0x2d4e29(0xc7)) / (-0x168a + -0x25 * -0xed + 0xbb5 * -0x1) * (-parseInt(_0x2d4e29(0xc1)) / (0x1 * 0x7a5 + 0x1f01 + -0x26a3)) + -parseInt(_0x2d4e29(0xd7)) / (-0xa7c + -0x26ac + -0x6 * -0x832) * (parseInt(_0x2d4e29(0xd5)) / (-0x1c02 + 0x5a * 0x4 + -0x5 * -0x553)) + -parseInt(_0x2d4e29(0xe6)) / (-0xf47 * -0x2 + 0x2 * -0x75c + -0xfd0) * (parseInt(_0x2d4e29(0xeb)) / (0xcfd * -0x1 + -0x1 * -0xd8c + 0x1 * -0x88)) + -parseInt(_0x2d4e29(0xd2)) / (0x12d1 + 0x1148 + -0x1 * 0x2411) + parseInt(_0x2d4e29(0xc8)) / (-0x5 * -0x1d7 + 0x29 + -0x953) + parseInt(_0x2d4e29(0xe7)) / (0x11b0 + 0xa87 + -0x1c2d) * (-parseInt(_0x2d4e29(0xe4)) / (0x2 * 0xd1 + 0x1caa + -0x1 * 0x1e41));
            if (_0x1f29d4 === _0x3ce8d3)
                break;
            else
                _0x4393d6['push'](_0x4393d6['shift']());
        } catch (_0x31bfd9) {
            _0x4393d6['push'](_0x4393d6['shift']());
        }
    }
}(_0x4565, 0xd070e + -0x1a * 0x75a + 0x2d4e4 * -0x1));
const _0x50cb95 = {};
_0x50cb95[_0x2ffaf1(0xcf)] = !![], Object[_0x2ffaf1(0xdc) + _0x2ffaf1(0xcb)](exports, _0x2ffaf1(0xc4), _0x50cb95);
const sequelize_1 = require(_0x2ffaf1(0xd0));
module[_0x2ffaf1(0xc5)] = {
    'up': _0x11fa5c => {
        const _0x364b31 = _0x2ffaf1, _0x43685d = {};
        _0x43685d[_0x364b31(0xbf)] = _0x364b31(0xdf), _0x43685d[_0x364b31(0xdb)] = _0x364b31(0xdd) + _0x364b31(0xe9), _0x43685d[_0x364b31(0xce)] = _0x364b31(0xd6), _0x43685d[_0x364b31(0xde)] = _0x364b31(0xc3), _0x43685d[_0x364b31(0xc0)] = _0x364b31(0xcd), _0x43685d[_0x364b31(0xc6)] = _0x364b31(0xd1), _0x43685d[_0x364b31(0xc2)] = _0x364b31(0xcc);
        const _0x3a8da0 = _0x43685d, _0x3f9fc3 = {};
        _0x3f9fc3[_0x364b31(0xd8)] = !![];
        const _0x59d70a = {};
        return _0x59d70a[_0x364b31(0xd8)] = !![], Promise[_0x364b31(0xe1)]([_0x11fa5c[_0x364b31(0xe3) + 'e'](_0x3a8da0[_0x364b31(0xbf)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xea)],
                    'defaultValue': sequelize_1[_0x364b31(0xec)][_0x364b31(0xe8)](_0x3a8da0[_0x364b31(0xdb)])
                },
                'sessionId': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xd4)],
                    'references': {
                        'model': _0x3a8da0[_0x364b31(0xce)],
                        'key': 'id'
                    },
                    'onUpdate': _0x3a8da0[_0x364b31(0xde)],
                    'onDelete': _0x3a8da0[_0x364b31(0xc0)]
                },
                'name': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xc9)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xe0)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xc9)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xd4)],
                    'references': {
                        'model': _0x3a8da0[_0x364b31(0xc6)],
                        'key': 'id'
                    },
                    'onUpdate': _0x3a8da0[_0x364b31(0xde)],
                    'onDelete': _0x3a8da0[_0x364b31(0xc0)]
                },
                'tenantId': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xd4)],
                    'references': {
                        'model': _0x3a8da0[_0x364b31(0xc2)],
                        'key': 'id'
                    },
                    'onUpdate': _0x3a8da0[_0x364b31(0xde)],
                    'onDelete': _0x3a8da0[_0x364b31(0xde)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xe5)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': _0x3f9fc3
                },
                'urlMessageStatus': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xe5)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': _0x59d70a
                },
                'createdAt': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xca)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[_0x364b31(0xe2)][_0x364b31(0xca)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': _0x39b761 => {
        const _0x32f818 = _0x2ffaf1, _0x4c6498 = {};
        _0x4c6498[_0x32f818(0xd3)] = _0x32f818(0xdf);
        const _0x3dd7d1 = _0x4c6498;
        return Promise[_0x32f818(0xe1)]([_0x39b761[_0x32f818(0xd9)](_0x3dd7d1[_0x32f818(0xd3)])]);
    }
};
function _0x2e92(_0x26ff6a, _0x39db03) {
    const _0x4ce5e4 = _0x4565();
    return _0x2e92 = function (_0x744cf9, _0x4e5f25) {
        _0x744cf9 = _0x744cf9 - (-0x1 * 0xf8a + 0xbe9 + 0x50 * 0xe);
        let _0x6c11b6 = _0x4ce5e4[_0x744cf9];
        return _0x6c11b6;
    }, _0x2e92(_0x26ff6a, _0x39db03);
}
function _0x4565() {
    const _0x37f88d = [
        '1500868wiOmZf',
        '4375170MlwsSd',
        'STRING',
        'DATE',
        'erty',
        'Tenants',
        'SET\x20NULL',
        'GfuTD',
        'value',
        'sequelize',
        'Users',
        '455504fjytBw',
        'KHDdA',
        'INTEGER',
        '1243995upPDNR',
        'Whatsapps',
        '8misXEl',
        'isUrl',
        'dropTable',
        '836377CJXktW',
        'oLlsx',
        'defineProp',
        'gen_random',
        'XphnU',
        'ApiConfigs',
        'BOOLEAN',
        'all',
        'DataTypes',
        'createTabl',
        '9229VutHqB',
        'TEXT',
        '18PePuNb',
        '1180kDcvpp',
        'literal',
        '_uuid()',
        'UUID',
        '1866977ZdCDTx',
        'Sequelize',
        'jAYmX',
        'xyuEN',
        '3jmCagO',
        'tkanC',
        'CASCADE',
        '__esModule',
        'exports',
        'KjTYn'
    ];
    _0x4565 = function () {
        return _0x37f88d;
    };
    return _0x4565();
}