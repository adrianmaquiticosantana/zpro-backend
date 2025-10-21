'use strict';
const _0x21aeb1 = _0xdd74;
(function (_0x1b752b, _0x3b74c2) {
    const _0x505e22 = _0xdd74, _0x2e9e99 = _0x1b752b();
    while (!![]) {
        try {
            const _0x421036 = -parseInt(_0x505e22(0x20f)) / (-0x3 * -0x32c + -0x10 * 0x15f + 0xc6d) + -parseInt(_0x505e22(0x208)) / (0x446 * -0x9 + 0x934 + -0x4 * -0x751) + parseInt(_0x505e22(0x20e)) / (-0x2168 + 0x20c2 + 0xa9) + parseInt(_0x505e22(0x1ee)) / (-0x2403 + 0x19 * -0x2c + 0x2853) * (parseInt(_0x505e22(0x1f0)) / (0x1 * 0x1557 + 0x36d * 0xb + -0x3b01)) + -parseInt(_0x505e22(0x206)) / (0xb * 0x38 + 0x7f * -0x1b + 0x1 * 0xb03) * (-parseInt(_0x505e22(0x1ed)) / (0x532 + -0x178e + 0x1263)) + -parseInt(_0x505e22(0x1fb)) / (0x254b * 0x1 + -0x26 * -0x5 + 0xcf * -0x2f) + parseInt(_0x505e22(0x1eb)) / (0xbf7 + 0x3 * 0xce3 + 0x9 * -0x59f);
            if (_0x421036 === _0x3b74c2)
                break;
            else
                _0x2e9e99['push'](_0x2e9e99['shift']());
        } catch (_0x1e04a2) {
            _0x2e9e99['push'](_0x2e9e99['shift']());
        }
    }
}(_0x33fd, 0x10b0 + -0x2bbbc + -0x35b13 * -0x2));
function _0xdd74(_0x593279, _0x4088bd) {
    const _0x2f44ee = _0x33fd();
    return _0xdd74 = function (_0x4c850f, _0x16c3ca) {
        _0x4c850f = _0x4c850f - (-0x83 * -0x11 + -0x1e78 + 0x8 * 0x2f6);
        let _0x169e30 = _0x2f44ee[_0x4c850f];
        return _0x169e30;
    }, _0xdd74(_0x593279, _0x4088bd);
}
const _0x1bc232 = {};
function _0x33fd() {
    const _0x2922d9 = [
        'createTabl',
        '902078USRDKS',
        'type',
        'WurDO',
        'erty',
        'xMtGo',
        'wqvto',
        '5037LiHHpr',
        '280362hUhNlp',
        '9992889cvPjbQ',
        'value',
        '1876567yyyZiN',
        '4qPwbep',
        'Queues',
        '293495OPlHhx',
        'dropTable',
        'exports',
        'allowNull',
        'Jnpqn',
        'DataTypes',
        'LogTickets',
        'CASCADE',
        'ent',
        'INTEGER',
        'autoIncrem',
        '3539144rMdySd',
        'gOVET',
        'STRING',
        'sequelize',
        'defineProp',
        'ernXP',
        'Users',
        'DATE',
        '__esModule',
        'Tickets',
        'primaryKey',
        '6egUnRT'
    ];
    _0x33fd = function () {
        return _0x2922d9;
    };
    return _0x33fd();
}
_0x1bc232[_0x21aeb1(0x1ec)] = !![], Object[_0x21aeb1(0x1ff) + _0x21aeb1(0x20b)](exports, _0x21aeb1(0x203), _0x1bc232);
const sequelize_1 = require(_0x21aeb1(0x1fe));
module[_0x21aeb1(0x1f2)] = {
    'up': _0x343435 => {
        const _0xfd35ca = _0x21aeb1, _0x4a7100 = {};
        _0x4a7100[_0xfd35ca(0x200)] = _0xfd35ca(0x1f6), _0x4a7100[_0xfd35ca(0x20a)] = _0xfd35ca(0x201), _0x4a7100[_0xfd35ca(0x1f4)] = _0xfd35ca(0x1f7), _0x4a7100[_0xfd35ca(0x20d)] = _0xfd35ca(0x204), _0x4a7100[_0xfd35ca(0x20c)] = _0xfd35ca(0x1ef);
        const _0x40c7b4 = _0x4a7100, _0x1fdafd = {};
        return _0x1fdafd[_0xfd35ca(0x209)] = sequelize_1[_0xfd35ca(0x1f5)][_0xfd35ca(0x1f9)], _0x1fdafd[_0xfd35ca(0x1fa) + _0xfd35ca(0x1f8)] = !![], _0x1fdafd[_0xfd35ca(0x205)] = !![], _0x1fdafd[_0xfd35ca(0x1f3)] = ![], _0x343435[_0xfd35ca(0x207) + 'e'](_0x40c7b4[_0xfd35ca(0x200)], {
            'id': _0x1fdafd,
            'userId': {
                'type': sequelize_1[_0xfd35ca(0x1f5)][_0xfd35ca(0x1f9)],
                'references': {
                    'model': _0x40c7b4[_0xfd35ca(0x20a)],
                    'key': 'id'
                },
                'onUpdate': _0x40c7b4[_0xfd35ca(0x1f4)],
                'onDelete': _0x40c7b4[_0xfd35ca(0x1f4)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[_0xfd35ca(0x1f5)][_0xfd35ca(0x1f9)],
                'references': {
                    'model': _0x40c7b4[_0xfd35ca(0x20d)],
                    'key': 'id'
                },
                'onUpdate': _0x40c7b4[_0xfd35ca(0x1f4)],
                'onDelete': _0x40c7b4[_0xfd35ca(0x1f4)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[_0xfd35ca(0x1f5)][_0xfd35ca(0x1f9)],
                'references': {
                    'model': _0x40c7b4[_0xfd35ca(0x20c)],
                    'key': 'id'
                },
                'onUpdate': _0x40c7b4[_0xfd35ca(0x1f4)],
                'onDelete': _0x40c7b4[_0xfd35ca(0x1f4)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[_0xfd35ca(0x1f5)][_0xfd35ca(0x1fd)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0xfd35ca(0x1f5)][_0xfd35ca(0x202)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0xfd35ca(0x1f5)][_0xfd35ca(0x202)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x5131b4 => {
        const _0x5ce379 = _0x21aeb1, _0x2cacaa = {};
        _0x2cacaa[_0x5ce379(0x1fc)] = _0x5ce379(0x1f6);
        const _0x58302b = _0x2cacaa;
        return _0x5131b4[_0x5ce379(0x1f1)](_0x58302b[_0x5ce379(0x1fc)]);
    }
};