'use strict';
const _0x291b67 = _0x3a4f;
(function (_0x1c8f4b, _0x110596) {
    const _0x41de20 = _0x3a4f, _0x588c08 = _0x1c8f4b();
    while (!![]) {
        try {
            const _0x2648fe = -parseInt(_0x41de20(0x11c)) / (0x2581 * -0x1 + 0x94d * 0x3 + 0x99b) + parseInt(_0x41de20(0x134)) / (0x2f7 * 0x7 + 0xeb7 + 0x11bb * -0x2) * (parseInt(_0x41de20(0x136)) / (0x18d + -0x1f * 0x3e + 0x5f8)) + parseInt(_0x41de20(0x144)) / (0x1 * -0x12eb + 0x16d8 + -0x3e9) + parseInt(_0x41de20(0x135)) / (-0x10 * 0xe7 + 0x5 * -0x1b7 + -0x1 * -0x1708) + -parseInt(_0x41de20(0x131)) / (-0xd03 * 0x1 + -0x29d + -0x7d3 * -0x2) + -parseInt(_0x41de20(0x11d)) / (-0x123 * -0x22 + -0x20d0 + -0x1 * 0x5cf) * (-parseInt(_0x41de20(0x138)) / (0x9 * 0x313 + 0xb * -0x23f + -0xfa * 0x3)) + parseInt(_0x41de20(0x141)) / (-0x19b9 + 0x2fc + 0x16c6);
            if (_0x2648fe === _0x110596)
                break;
            else
                _0x588c08['push'](_0x588c08['shift']());
        } catch (_0x13dba7) {
            _0x588c08['push'](_0x588c08['shift']());
        }
    }
}(_0x30a8, -0xa6c8b * 0x1 + 0xe1d22 + 0x7fdf0));
const _0x224107 = {};
_0x224107[_0x291b67(0x12b)] = !![], Object[_0x291b67(0x12c) + _0x291b67(0x142)](exports, _0x291b67(0x129), _0x224107);
const sequelize_1 = require(_0x291b67(0x13a));
module[_0x291b67(0x13e)] = {
    'up': _0x357a5f => {
        const _0x418373 = _0x291b67, _0x1ccef0 = {};
        _0x1ccef0[_0x418373(0x12d)] = _0x418373(0x139) + 's', _0x1ccef0[_0x418373(0x123)] = _0x418373(0x125) + _0x418373(0x140), _0x1ccef0[_0x418373(0x12e)] = _0x418373(0x12f), _0x1ccef0[_0x418373(0x143)] = _0x418373(0x13c), _0x1ccef0[_0x418373(0x124)] = _0x418373(0x126), _0x1ccef0[_0x418373(0x120)] = _0x418373(0x145);
        const _0xbcf289 = _0x1ccef0, _0x2ffef7 = {};
        _0x2ffef7[_0x418373(0x132)] = !![];
        const _0x54774e = {};
        return _0x54774e[_0x418373(0x132)] = !![], _0x54774e[_0x418373(0x137)] = [
            -0x2409 + -0x2390 + 0x47a5,
            -0x1b4e + 0x1c9d + -0x141
        ], Promise[_0x418373(0x128)]([_0x357a5f[_0x418373(0x11e) + 'e'](_0xbcf289[_0x418373(0x12d)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x121)],
                    'defaultValue': sequelize_1[_0x418373(0x133)][_0x418373(0x146)](_0xbcf289[_0x418373(0x123)])
                },
                'messageId': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x130)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x130)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x122)],
                    'allowNull': ![],
                    'validate': _0x2ffef7
                },
                'ack': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x12a)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x130)],
                    'allowNull': ![],
                    'validate': _0x54774e
                },
                'mediaName': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x122)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x12a)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x12a)],
                    'references': {
                        'model': _0xbcf289[_0x418373(0x12e)],
                        'key': 'id'
                    },
                    'onUpdate': _0xbcf289[_0x418373(0x143)],
                    'onDelete': _0xbcf289[_0x418373(0x124)]
                },
                'tenantId': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x12a)],
                    'references': {
                        'model': _0xbcf289[_0x418373(0x120)],
                        'key': 'id'
                    },
                    'onUpdate': _0xbcf289[_0x418373(0x143)],
                    'onDelete': _0xbcf289[_0x418373(0x143)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x127)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x127)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x13b)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[_0x418373(0x11f)][_0x418373(0x13b)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': _0x515608 => {
        const _0x5e37e2 = _0x291b67, _0x13b872 = {};
        _0x13b872[_0x5e37e2(0x13f)] = _0x5e37e2(0x139) + 's';
        const _0x134323 = _0x13b872;
        return Promise[_0x5e37e2(0x128)]([_0x515608[_0x5e37e2(0x13d)](_0x134323[_0x5e37e2(0x13f)])]);
    }
};
function _0x3a4f(_0x43e8d7, _0x2c2631) {
    const _0x360cf2 = _0x30a8();
    return _0x3a4f = function (_0x3ea601, _0xc1e8c4) {
        _0x3ea601 = _0x3ea601 - (0x1 * 0xb1b + -0xe00 + -0x19 * -0x29);
        let _0x1836b2 = _0x360cf2[_0x3ea601];
        return _0x1836b2;
    }, _0x3a4f(_0x43e8d7, _0x2c2631);
}
function _0x30a8() {
    const _0x800caf = [
        '1104083ysuFjP',
        '14GeMZlu',
        'createTabl',
        'DataTypes',
        'QppdL',
        'UUID',
        'TEXT',
        'LhdaL',
        'QnjwT',
        'gen_random',
        'SET\x20NULL',
        'JSONB',
        'all',
        '__esModule',
        'INTEGER',
        'value',
        'defineProp',
        'AeIQJ',
        'BkQgb',
        'Whatsapps',
        'STRING',
        '8420256fpNYCa',
        'notEmpty',
        'Sequelize',
        '30CBrqhN',
        '633915MyuQhK',
        '303135uskZjz',
        'len',
        '1955120dPGWOx',
        'ApiMessage',
        'sequelize',
        'DATE',
        'CASCADE',
        'dropTable',
        'exports',
        'FZdoz',
        '_uuid()',
        '3766806VOEjfw',
        'erty',
        'BIYwy',
        '2893048diQAQh',
        'Tenants',
        'literal'
    ];
    _0x30a8 = function () {
        return _0x800caf;
    };
    return _0x30a8();
}