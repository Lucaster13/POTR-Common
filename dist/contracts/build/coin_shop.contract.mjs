export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;
export function getExports(s) {
    const stdlib = s.reachStdlib;
    return {};
}
;
export function _getEvents(s) {
    const stdlib = s.reachStdlib;
    const ctc0 = stdlib.T_UInt;
    const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
    const ctc3 = stdlib.T_Address;
    const ctc4 = stdlib.T_Bool;
    return {
        price_change: [ctc1],
        purchase: [ctc2, ctc3],
        restock: [ctc1],
        terminate: [ctc4],
        withdraw: [ctc1]
    };
}
;
export function _getViews(s, viewlib) {
    const stdlib = s.reachStdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Bool;
    const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
    const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const _coin_prices = async (i, svs, args) => {
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v6612, v6613, v6614, v6615, v6630, v6637] = svs;
            stdlib.assert(false, 'illegal view');
        }
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6686, v6687, v12120, v12121, v12123, v12125, v12126] = svs;
            return (await ((async () => {
                return v6677;
            }))(...args));
        }
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = svs;
            return (await ((async () => {
                return v6677;
            }))(...args));
        }
        stdlib.assert(false, 'illegal view');
    };
    const _coin_supply = async (i, svs, args) => {
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v6612, v6613, v6614, v6615, v6630, v6637] = svs;
            stdlib.assert(false, 'illegal view');
        }
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6686, v6687, v12120, v12121, v12123, v12125, v12126] = svs;
            return (await ((async () => {
                return v12126;
            }))(...args));
        }
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = svs;
            return (await ((async () => {
                return v6720;
            }))(...args));
        }
        stdlib.assert(false, 'illegal view');
    };
    const _is_paused = async (i, svs, args) => {
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v6612, v6613, v6614, v6615, v6630, v6637] = svs;
            stdlib.assert(false, 'illegal view');
        }
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6686, v6687, v12120, v12121, v12123, v12125, v12126] = svs;
            return (await ((async () => {
                return v6678;
            }))(...args));
        }
        if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
            const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = svs;
            return (await ((async () => {
                return v6678;
            }))(...args));
        }
        stdlib.assert(false, 'illegal view');
    };
    return {
        infos: {
            coin_prices: {
                decode: _coin_prices,
                dom: [],
                rng: ctc6
            },
            coin_supply: {
                decode: _coin_supply,
                dom: [],
                rng: ctc6
            },
            is_paused: {
                decode: _is_paused,
                dom: [],
                rng: ctc3
            }
        },
        views: {
            1: [ctc0, ctc1, ctc1, ctc1, ctc5, ctc0],
            3: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc6, ctc3, ctc5, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6],
            5: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc6, ctc3, ctc3, ctc5, ctc2, ctc3, ctc4, ctc2, ctc4, ctc2, ctc4, ctc2, ctc6, ctc2, ctc2, ctc2]
        }
    };
}
;
export function _getMaps(s) {
    const stdlib = s.reachStdlib;
    const ctc0 = stdlib.T_Tuple([]);
    return {
        mapDataTy: ctc0
    };
}
;
export async function Admin(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Token;
    const ctc1 = stdlib.T_Tuple([]);
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Tuple([ctc3]);
    const ctc5 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc1,
        buyer_api_gold0_895: ctc1,
        buyer_api_silver0_895: ctc1,
        controller_api_restock0_895: ctc4,
        controller_api_set_prices0_895: ctc4,
        controller_api_terminate0_895: ctc1,
        controller_api_toggle_pause0_895: ctc1,
        controller_api_withdraw0_895: ctc1
    });
    const ctc6 = stdlib.T_Bool;
    const ctc7 = stdlib.T_Null;
    const ctc8 = stdlib.T_Address;
    const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
    const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const v6567 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
    const v6568 = [v6567, v6567, v6567];
    const txn1 = await (ctc.recv({
        didSend: false,
        evt_cnt: 3,
        funcNum: 0,
        out_tys: [ctc0, ctc0, ctc0],
        timeoutAt: undefined,
        waitIfNotPresent: false
    }));
    const { data: [v6613, v6614, v6615], secs: v6617, time: v6616, didSend: v439, from: v6612 } = txn1;
    const v6618 = v6568[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0')];
    const v6619 = stdlib.Array_set(v6618, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
    const v6620 = stdlib.Array_set(v6568, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'), v6619);
    const v6622 = v6620[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '1')];
    const v6623 = stdlib.Array_set(v6622, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
    const v6624 = stdlib.Array_set(v6620, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '1'), v6623);
    const v6626 = stdlib.tokenEq(v6614, v6613);
    const v6627 = v6626 ? false : true;
    stdlib.assert(v6627, {
        at: './src/contracts/coin_shop.rsh:108:18:dot',
        fs: [],
        msg: 'non-network tokens distinct',
        who: 'Admin'
    });
    const v6628 = v6624[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '2')];
    const v6629 = stdlib.Array_set(v6628, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
    const v6630 = stdlib.Array_set(v6624, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '2'), v6629);
    const v6632 = stdlib.tokenEq(v6615, v6613);
    const v6633 = v6632 ? false : true;
    const v6634 = stdlib.tokenEq(v6615, v6614);
    const v6635 = v6634 ? false : true;
    const v6636 = v6632 ? false : v6635;
    stdlib.assert(v6636, {
        at: './src/contracts/coin_shop.rsh:108:18:dot',
        fs: [],
        msg: 'non-network tokens distinct',
        who: 'Admin'
    });
    ;
    ;
    ;
    ;
    const v6637 = ctc.iam(v6612);
    const v6642 = stdlib.tokenEq(v6613, v6614);
    const v6643 = v6642 ? false : true;
    stdlib.assert(v6643, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Admin'
    });
    const v6646 = stdlib.tokenEq(v6613, v6615);
    const v6647 = v6646 ? false : true;
    stdlib.assert(v6647, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Admin'
    });
    const v6656 = stdlib.tokenEq(v6614, v6615);
    const v6657 = v6656 ? false : true;
    stdlib.assert(v6657, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Admin'
    });
    stdlib.assert(v6633, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Admin'
    });
    stdlib.assert(v6635, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Admin'
    });
    const txn2 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 1,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
    }));
    const { data: [], secs: v6674, time: v6673, didSend: v845, from: v6672 } = txn2;
    ;
    const v6675 = stdlib.addressEq(v6612, v6672);
    stdlib.assert(v6675, {
        at: './src/contracts/coin_shop.rsh:120:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
    });
    const v6676 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
    let v6677 = v6676;
    let v6678 = false;
    let v6679 = false;
    let v6680 = v6673;
    let v6686 = v6630;
    let v6687 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, '0');
    let txn3 = txn2;
    while (await (async () => {
        const v6712 = v6679 ? false : true;
        return v6712;
    })()) {
        const v6713 = v6678 ? true : v6679;
        const v6714 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
        const v6715 = v6714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
        const v6716 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
        const v6717 = v6716[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
        const v6718 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
        const v6719 = v6718[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
        const v6720 = [v6715, v6717, v6719];
        const v6722 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
        const v6723 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
        const v6724 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
        const txn4 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 4,
            out_tys: [ctc5],
            timeoutAt: undefined,
            waitIfNotPresent: false
        }));
        const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn4;
        switch (v7204[0]) {
            case 'buyer_api_bronze0_895': {
                const v7207 = v7204[1];
                undefined;
                stdlib.assert(v6713, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:155:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'contract is currently inactive',
                    who: 'Admin'
                });
                const v7215 = stdlib.ge(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:156:41:decimal', stdlib.UInt_max, '1'));
                stdlib.assert(v7215, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:156:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'balance insufficient for transaction',
                    who: 'Admin'
                });
                const v7416 = stdlib.add(v6687, v6722);
                const v7417 = stdlib.le(v7416, stdlib.UInt_max);
                stdlib.assert(v7417, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v7422 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v7422, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v7430 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v7430, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v7438 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v7438, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v7475 = stdlib.sub(v7416, v7416);
                const v7476 = stdlib.ge(v7475, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:163:84:application', stdlib.UInt_max, '0'));
                stdlib.assert(v7476, {
                    at: './src/contracts/coin_shop.rsh:163:84:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                ;
                const v7505 = stdlib.sub(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:64:decimal', stdlib.UInt_max, '1'));
                const v7506 = stdlib.ge(v7505, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v7506, {
                    at: './src/contracts/coin_shop.rsh:164:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                const v7509 = stdlib.Array_set(v6714, '0', v7505);
                const v7510 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:76:application', stdlib.UInt_max, '0'), v7509);
                ;
                const v7511 = 'bronze';
                null;
                const v7512 = true;
                await txn4.getOutput('buyer_api_bronze', 'v7512', ctc6, v7512);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v7510;
                const cv6687 = v7475;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'buyer_api_gold0_895': {
                const v7821 = v7204[1];
                undefined;
                stdlib.assert(v6713, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:195:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'contract is currently inactive',
                    who: 'Admin'
                });
                const v7852 = stdlib.ge(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:196:41:decimal', stdlib.UInt_max, '1'));
                stdlib.assert(v7852, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:196:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'balance insufficient for transaction',
                    who: 'Admin'
                });
                const v8030 = stdlib.add(v6687, v6724);
                const v8031 = stdlib.le(v8030, stdlib.UInt_max);
                stdlib.assert(v8031, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8036 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v8036, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8044 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v8044, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8052 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v8052, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8165 = stdlib.sub(v8030, v8030);
                const v8166 = stdlib.ge(v8165, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:203:84:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8166, {
                    at: './src/contracts/coin_shop.rsh:203:84:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                ;
                const v8195 = stdlib.sub(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:70:decimal', stdlib.UInt_max, '1'));
                const v8196 = stdlib.ge(v8195, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8196, {
                    at: './src/contracts/coin_shop.rsh:204:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                const v8199 = stdlib.Array_set(v6718, '0', v8195);
                const v8200 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:76:application', stdlib.UInt_max, '2'), v8199);
                ;
                const v8201 = 'gold  ';
                null;
                const v8202 = true;
                await txn4.getOutput('buyer_api_gold', 'v8202', ctc6, v8202);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v8200;
                const cv6687 = v8165;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'buyer_api_silver0_895': {
                const v8435 = v7204[1];
                undefined;
                stdlib.assert(v6713, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:175:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'contract is currently inactive',
                    who: 'Admin'
                });
                const v8489 = stdlib.ge(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:176:41:decimal', stdlib.UInt_max, '1'));
                stdlib.assert(v8489, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:176:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'balance insufficient for transaction',
                    who: 'Admin'
                });
                const v8644 = stdlib.add(v6687, v6723);
                const v8645 = stdlib.le(v8644, stdlib.UInt_max);
                stdlib.assert(v8645, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8650 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v8650, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8658 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v8658, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8666 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v8666, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v8855 = stdlib.sub(v8644, v8644);
                const v8856 = stdlib.ge(v8855, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:183:84:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8856, {
                    at: './src/contracts/coin_shop.rsh:183:84:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                ;
                const v8885 = stdlib.sub(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:67:decimal', stdlib.UInt_max, '1'));
                const v8886 = stdlib.ge(v8885, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8886, {
                    at: './src/contracts/coin_shop.rsh:184:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                const v8889 = stdlib.Array_set(v6716, '0', v8885);
                const v8890 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:76:application', stdlib.UInt_max, '1'), v8889);
                ;
                const v8891 = 'silver';
                null;
                const v8892 = true;
                await txn4.getOutput('buyer_api_silver', 'v8892', ctc6, v8892);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v8890;
                const cv6687 = v8855;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_restock0_895': {
                const v9049 = v7204[1];
                undefined;
                const v9123 = v9049[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:217:22:spread', stdlib.UInt_max, '0')];
                const v9124 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v9124, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:218:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:217:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Admin'
                });
                const v9126 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '0')];
                const v9127 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '1')];
                const v9128 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '2')];
                const v9259 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v9259, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v9263 = stdlib.add(v6715, v9126);
                const v9264 = stdlib.le(v9263, stdlib.UInt_max);
                stdlib.assert(v9264, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                const v9267 = stdlib.Array_set(v6714, '0', v9263);
                const v9268 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0'), v9267);
                ;
                const v9269 = v9268[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1')];
                const v9270 = v9269[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
                const v9271 = stdlib.add(v9270, v9127);
                const v9272 = stdlib.le(v9271, stdlib.UInt_max);
                stdlib.assert(v9272, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                const v9275 = stdlib.Array_set(v9269, '0', v9271);
                const v9276 = stdlib.Array_set(v9268, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1'), v9275);
                ;
                const v9277 = v9276[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2')];
                const v9278 = v9277[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
                const v9279 = stdlib.add(v9278, v9128);
                const v9280 = stdlib.le(v9279, stdlib.UInt_max);
                stdlib.assert(v9280, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                const v9283 = stdlib.Array_set(v9277, '0', v9279);
                const v9284 = stdlib.Array_set(v9276, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2'), v9283);
                ;
                const v9518 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v9519 = v9518[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v9520 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v9521 = v9520[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v9522 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v9523 = v9522[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v9524 = [v9519, v9521, v9523];
                null;
                const v9527 = 'Successfully restocked CoinAmount';
                stdlib.protect(ctc7, await interact.log(v9527), {
                    at: './src/contracts/coin_shop.rsh:226:59:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:226:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:226:59:function exp)', 'at ./src/contracts/coin_shop.rsh:226:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:226:59:application)', 'at ./src/contracts/coin_shop.rsh:222:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:222:43:function exp)'],
                    msg: 'log',
                    who: 'Admin'
                });
                const v9528 = true;
                await txn4.getOutput('controller_api_restock', 'v9528', ctc6, v9528);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v9284;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_set_prices0_895': {
                const v9663 = v7204[1];
                undefined;
                const v9761 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v9761, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:235:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:234:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Admin'
                });
                const v9873 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v9873, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v9878 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v9878, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v9886 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v9886, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v9894 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v9894, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v10154 = v9663[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:234:22:spread', stdlib.UInt_max, '0')];
                null;
                const v10162 = 'Successfully changed coin prices';
                stdlib.protect(ctc7, await interact.log(v10162), {
                    at: './src/contracts/coin_shop.rsh:243:59:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:243:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:243:59:function exp)', 'at ./src/contracts/coin_shop.rsh:243:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:243:59:application)', 'at ./src/contracts/coin_shop.rsh:239:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:239:43:function exp)'],
                    msg: 'log',
                    who: 'Admin'
                });
                const v10163 = true;
                await txn4.getOutput('controller_api_set_prices', 'v10163', ctc6, v10163);
                const cv6677 = v10154;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v6686;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_terminate0_895': {
                const v10277 = v7204[1];
                undefined;
                const v10394 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v10394, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:292:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:291:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Admin'
                });
                const v10487 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v10487, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v10492 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v10492, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v10500 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v10500, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v10508 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v10508, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v10792 = 'Terminating Contract Execution';
                stdlib.protect(ctc7, await interact.log(v10792), {
                    at: './src/contracts/coin_shop.rsh:297:59:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:297:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:297:59:function exp)', 'at ./src/contracts/coin_shop.rsh:297:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:297:59:application)', 'at ./src/contracts/coin_shop.rsh:296:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:43:function exp)'],
                    msg: 'log',
                    who: 'Admin'
                });
                const v10793 = true;
                null;
                const v10794 = true;
                await txn4.getOutput('controller_api_terminate', 'v10794', ctc6, v10794);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = true;
                const cv6680 = v7205;
                const cv6686 = v6686;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_toggle_pause0_895': {
                const v10891 = v7204[1];
                undefined;
                const v11027 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v11027, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:252:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:251:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Admin'
                });
                const v11101 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v11101, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v11106 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v11106, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v11114 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v11114, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v11122 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v11122, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v11418 = 'Resuming Contract APIs        ';
                const v11419 = 'Pausing Contract APIs         ';
                const v11420 = v6678 ? v11418 : v11419;
                stdlib.protect(ctc7, await interact.log(v11420), {
                    at: './src/contracts/coin_shop.rsh:261:59:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:261:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:261:59:function exp)', 'at ./src/contracts/coin_shop.rsh:261:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:261:59:application)', 'at ./src/contracts/coin_shop.rsh:256:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:256:43:function exp)'],
                    msg: 'log',
                    who: 'Admin'
                });
                const v11422 = v6678 ? false : true;
                await txn4.getOutput('controller_api_toggle_pause', 'v11422', ctc6, v11422);
                const cv6677 = v6677;
                const cv6678 = v11422;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v6686;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_withdraw0_895': {
                const v11505 = v7204[1];
                undefined;
                const v11660 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v11660, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:272:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:271:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Admin'
                });
                const v11715 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v11715, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v11720 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v11720, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v11728 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v11728, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v11736 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v11736, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Admin'
                });
                ;
                const v12048 = 'Withdrawing CoinAmount from contract';
                stdlib.protect(ctc7, await interact.log(v12048), {
                    at: './src/contracts/coin_shop.rsh:277:59:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:277:59:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:277:59:function exp)', 'at ./src/contracts/coin_shop.rsh:277:59:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:277:59:application)', 'at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'log',
                    who: 'Admin'
                });
                const v12083 = stdlib.sub(v6715, v6715);
                const v12084 = stdlib.ge(v12083, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v12084, {
                    at: './src/contracts/coin_shop.rsh:281:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                const v12087 = stdlib.Array_set(v6714, '0', v12083);
                const v12088 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'), v12087);
                ;
                const v12089 = v12088[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1')];
                const v12090 = v12089[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
                const v12094 = stdlib.sub(v12090, v6717);
                const v12095 = stdlib.ge(v12094, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v12095, {
                    at: './src/contracts/coin_shop.rsh:281:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                const v12098 = stdlib.Array_set(v12089, '0', v12094);
                const v12099 = stdlib.Array_set(v12088, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1'), v12098);
                ;
                const v12100 = v12099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2')];
                const v12101 = v12100[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
                const v12105 = stdlib.sub(v12101, v6719);
                const v12106 = stdlib.ge(v12105, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v12106, {
                    at: './src/contracts/coin_shop.rsh:281:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Admin'
                });
                const v12109 = stdlib.Array_set(v12100, '0', v12105);
                const v12110 = stdlib.Array_set(v12099, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2'), v12109);
                ;
                null;
                const v12112 = true;
                await txn4.getOutput('controller_api_withdraw', 'v12112', ctc6, v12112);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v12110;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
        }
    }
    const v12120 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
    const v12121 = v12120[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
    const v12122 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
    const v12123 = v12122[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
    const v12124 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
    const v12125 = v12124[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
    const v12126 = [v12121, v12123, v12125];
    const txn4 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6686, v6687, v12120, v12121, v12123, v12125, v12126],
        evt_cnt: 0,
        funcNum: 3,
        lct: v6680,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [], secs: v12139, time: v12138, didSend: v6008, from: v12137 } = txn4;
            ;
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: undefined
            });
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: v6613
            });
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: v6614
            });
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: v6615
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: v6615
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: v6614
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: v6613
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: undefined
            });
            sim_r.isHalt = true;
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc8, ctc0, ctc0, ctc0, ctc8, ctc3, ctc6, ctc10, ctc2, ctc9, ctc2, ctc2, ctc2, ctc3],
        waitIfNotPresent: false
    }));
    const { data: [], secs: v12139, time: v12138, didSend: v6008, from: v12137 } = txn4;
    ;
    const v12140 = stdlib.addressEq(v6637, v12137);
    const v12141 = stdlib.addressEq(v6612, v12137);
    const v12142 = v12140 ? true : v12141;
    stdlib.assert(v12142, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Admin'
    });
    const v12165 = stdlib.sub(v6687, v6687);
    const v12166 = stdlib.ge(v12165, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12166, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Admin'
    });
    ;
    const v12173 = stdlib.sub(v12121, v12121);
    const v12174 = stdlib.ge(v12173, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12174, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Admin'
    });
    const v12177 = stdlib.Array_set(v12120, '0', v12173);
    const v12178 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'), v12177);
    ;
    const v12179 = v12178[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1')];
    const v12180 = v12179[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
    const v12184 = stdlib.sub(v12180, v12123);
    const v12185 = stdlib.ge(v12184, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12185, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Admin'
    });
    const v12188 = stdlib.Array_set(v12179, '0', v12184);
    const v12189 = stdlib.Array_set(v12178, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v12188);
    ;
    const v12190 = v12189[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '2')];
    const v12191 = v12190[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
    const v12195 = stdlib.sub(v12191, v12125);
    const v12196 = stdlib.ge(v12195, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12196, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Admin'
    });
    ;
    const v12214 = 'Closing contract...';
    stdlib.protect(ctc7, await interact.log(v12214), {
        at: './src/contracts/coin_shop.rsh:312:43:application',
        fs: ['at ./src/contracts/coin_shop.rsh:312:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:312:43:function exp)', 'at ./src/contracts/coin_shop.rsh:312:43:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:312:43:application)', 'at reach standard library:200:8:application call to "after" (defined at: ./src/contracts/coin_shop.rsh:311:20:function exp)', 'at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'log',
        who: 'Admin'
    });
    return;
}
;
export async function Deployer(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Token;
    const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc2 = stdlib.T_Null;
    const ctc3 = stdlib.T_Tuple([]);
    const ctc4 = stdlib.T_UInt;
    const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc6 = stdlib.T_Tuple([ctc5]);
    const ctc7 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc3,
        buyer_api_gold0_895: ctc3,
        buyer_api_silver0_895: ctc3,
        controller_api_restock0_895: ctc6,
        controller_api_set_prices0_895: ctc6,
        controller_api_terminate0_895: ctc3,
        controller_api_toggle_pause0_895: ctc3,
        controller_api_withdraw0_895: ctc3
    });
    const ctc8 = stdlib.T_Bool;
    const ctc9 = stdlib.T_Address;
    const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
    const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const v6567 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
    const v6568 = [v6567, v6567, v6567];
    const v6572 = stdlib.protect(ctc1, interact.coin_asa_ids, 'for Deployer\'s interact field coin_asa_ids');
    const v6573 = v6572[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:52:37:application', stdlib.UInt_max, '0')];
    const v6574 = v6572[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:52:37:application', stdlib.UInt_max, '1')];
    const v6575 = v6572[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:52:37:application', stdlib.UInt_max, '2')];
    const v6585 = stdlib.tokenEq(v6573, v6574);
    const v6586 = v6585 ? false : true;
    stdlib.assert(v6586, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:106:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)', 'at ./src/contracts/coin_shop.rsh:103:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:103:26:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6589 = stdlib.tokenEq(v6573, v6575);
    const v6590 = v6589 ? false : true;
    stdlib.assert(v6590, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:106:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)', 'at ./src/contracts/coin_shop.rsh:103:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:103:26:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6594 = stdlib.tokenEq(v6574, v6573);
    const v6595 = v6594 ? false : true;
    stdlib.assert(v6595, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:106:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)', 'at ./src/contracts/coin_shop.rsh:103:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:103:26:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6599 = stdlib.tokenEq(v6574, v6575);
    const v6600 = v6599 ? false : true;
    stdlib.assert(v6600, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:106:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)', 'at ./src/contracts/coin_shop.rsh:103:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:103:26:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6604 = stdlib.tokenEq(v6575, v6573);
    const v6605 = v6604 ? false : true;
    stdlib.assert(v6605, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:106:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)', 'at ./src/contracts/coin_shop.rsh:103:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:103:26:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6608 = stdlib.tokenEq(v6575, v6574);
    const v6609 = v6608 ? false : true;
    stdlib.assert(v6609, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:106:34:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)', 'at ./src/contracts/coin_shop.rsh:103:22:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:103:26:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const txn1 = await (ctc.sendrecv({
        args: [v6573, v6574, v6575],
        evt_cnt: 3,
        funcNum: 0,
        lct: stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc0, ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v6613, v6614, v6615], secs: v6617, time: v6616, didSend: v439, from: v6612 } = txn1;
            const v6618 = v6568[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0')];
            const v6619 = stdlib.Array_set(v6618, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
            const v6620 = stdlib.Array_set(v6568, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'), v6619);
            const v6622 = v6620[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '1')];
            const v6623 = stdlib.Array_set(v6622, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
            const v6624 = stdlib.Array_set(v6620, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '1'), v6623);
            const v6628 = v6624[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '2')];
            const v6629 = stdlib.Array_set(v6628, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
            const v6630 = stdlib.Array_set(v6624, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '2'), v6629);
            sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                kind: 'init',
                tok: v6613
            });
            sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                kind: 'init',
                tok: v6614
            });
            sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                kind: 'init',
                tok: v6615
            });
            ;
            const v6637 = v6612;
            const v6669 = await ctc.getContractInfo();
            const v6670 = await ctc.getContractAddress();
            sim_r.isHalt = false;
            return sim_r;
        }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc0, ctc0, ctc0],
        waitIfNotPresent: false
    }));
    const { data: [v6613, v6614, v6615], secs: v6617, time: v6616, didSend: v439, from: v6612 } = txn1;
    const v6618 = v6568[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0')];
    const v6619 = stdlib.Array_set(v6618, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
    const v6620 = stdlib.Array_set(v6568, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'), v6619);
    const v6622 = v6620[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '1')];
    const v6623 = stdlib.Array_set(v6622, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
    const v6624 = stdlib.Array_set(v6620, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '1'), v6623);
    const v6626 = stdlib.tokenEq(v6614, v6613);
    const v6627 = v6626 ? false : true;
    stdlib.assert(v6627, {
        at: './src/contracts/coin_shop.rsh:108:18:dot',
        fs: [],
        msg: 'non-network tokens distinct',
        who: 'Deployer'
    });
    const v6628 = v6624[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '2')];
    const v6629 = stdlib.Array_set(v6628, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '0'));
    const v6630 = stdlib.Array_set(v6624, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:108:18:dot', stdlib.UInt_max, '2'), v6629);
    const v6632 = stdlib.tokenEq(v6615, v6613);
    const v6633 = v6632 ? false : true;
    const v6634 = stdlib.tokenEq(v6615, v6614);
    const v6635 = v6634 ? false : true;
    const v6636 = v6632 ? false : v6635;
    stdlib.assert(v6636, {
        at: './src/contracts/coin_shop.rsh:108:18:dot',
        fs: [],
        msg: 'non-network tokens distinct',
        who: 'Deployer'
    });
    ;
    ;
    ;
    ;
    const v6637 = v6612;
    const v6642 = stdlib.tokenEq(v6613, v6614);
    const v6643 = v6642 ? false : true;
    stdlib.assert(v6643, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6646 = stdlib.tokenEq(v6613, v6615);
    const v6647 = v6646 ? false : true;
    stdlib.assert(v6647, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6656 = stdlib.tokenEq(v6614, v6615);
    const v6657 = v6656 ? false : true;
    stdlib.assert(v6657, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    stdlib.assert(v6633, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    stdlib.assert(v6635, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp)', 'at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp)', 'at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp)', 'at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp)', 'at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Deployer'
    });
    const v6669 = await ctc.getContractInfo();
    const v6670 = await ctc.getContractAddress();
    stdlib.protect(ctc2, await interact.deployed(v6669, v6670), {
        at: './src/contracts/coin_shop.rsh:118:35:application',
        fs: ['at ./src/contracts/coin_shop.rsh:118:35:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:118:35:function exp)', 'at ./src/contracts/coin_shop.rsh:118:35:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:118:35:application)'],
        msg: 'deployed',
        who: 'Deployer'
    });
    const txn2 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6630, v6637],
        evt_cnt: 0,
        funcNum: 1,
        lct: v6616,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:120:18:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn2) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [], secs: v6674, time: v6673, didSend: v845, from: v6672 } = txn2;
            ;
            const v6676 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
            const v6677 = v6676;
            const v6678 = false;
            const v6679 = false;
            const v6680 = v6673;
            const v6686 = v6630;
            const v6687 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, '0');
            if (await (async () => {
                const v6712 = v6679 ? false : true;
                return v6712;
            })()) {
                const v6713 = v6678 ? true : v6679;
                const v6714 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v6715 = v6714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v6716 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v6717 = v6716[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v6718 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v6719 = v6718[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v6720 = [v6715, v6717, v6719];
                const v6722 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v6723 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v6724 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                sim_r.isHalt = false;
            }
            else {
                const v12120 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v12121 = v12120[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v12122 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v12123 = v12122[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v12124 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v12125 = v12124[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v12126 = [v12121, v12123, v12125];
                sim_r.isHalt = false;
            }
            return sim_r;
        }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc9, ctc0, ctc0, ctc0, ctc11, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [], secs: v6674, time: v6673, didSend: v845, from: v6672 } = txn2;
    ;
    const v6675 = stdlib.addressEq(v6612, v6672);
    stdlib.assert(v6675, {
        at: './src/contracts/coin_shop.rsh:120:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
    });
    const v6676 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
    let v6677 = v6676;
    let v6678 = false;
    let v6679 = false;
    let v6680 = v6673;
    let v6686 = v6630;
    let v6687 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:100:15:after expr stmt semicolon', stdlib.UInt_max, '0');
    let txn3 = txn2;
    while (await (async () => {
        const v6712 = v6679 ? false : true;
        return v6712;
    })()) {
        const v6713 = v6678 ? true : v6679;
        const v6714 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
        const v6715 = v6714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
        const v6716 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
        const v6717 = v6716[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
        const v6718 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
        const v6719 = v6718[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
        const v6720 = [v6715, v6717, v6719];
        const v6722 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
        const v6723 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
        const v6724 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
        const txn4 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 4,
            out_tys: [ctc7],
            timeoutAt: undefined,
            waitIfNotPresent: false
        }));
        const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn4;
        switch (v7204[0]) {
            case 'buyer_api_bronze0_895': {
                const v7207 = v7204[1];
                undefined;
                stdlib.assert(v6713, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:155:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'contract is currently inactive',
                    who: 'Deployer'
                });
                const v7215 = stdlib.ge(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:156:41:decimal', stdlib.UInt_max, '1'));
                stdlib.assert(v7215, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:156:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'balance insufficient for transaction',
                    who: 'Deployer'
                });
                const v7416 = stdlib.add(v6687, v6722);
                const v7417 = stdlib.le(v7416, stdlib.UInt_max);
                stdlib.assert(v7417, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v7422 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v7422, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v7430 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v7430, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v7438 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v7438, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v7475 = stdlib.sub(v7416, v7416);
                const v7476 = stdlib.ge(v7475, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:163:84:application', stdlib.UInt_max, '0'));
                stdlib.assert(v7476, {
                    at: './src/contracts/coin_shop.rsh:163:84:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                ;
                const v7505 = stdlib.sub(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:64:decimal', stdlib.UInt_max, '1'));
                const v7506 = stdlib.ge(v7505, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v7506, {
                    at: './src/contracts/coin_shop.rsh:164:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                const v7509 = stdlib.Array_set(v6714, '0', v7505);
                const v7510 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:76:application', stdlib.UInt_max, '0'), v7509);
                ;
                const v7511 = 'bronze';
                null;
                const v7512 = true;
                await txn4.getOutput('buyer_api_bronze', 'v7512', ctc8, v7512);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v7510;
                const cv6687 = v7475;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'buyer_api_gold0_895': {
                const v7821 = v7204[1];
                undefined;
                stdlib.assert(v6713, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:195:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'contract is currently inactive',
                    who: 'Deployer'
                });
                const v7852 = stdlib.ge(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:196:41:decimal', stdlib.UInt_max, '1'));
                stdlib.assert(v7852, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:196:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'balance insufficient for transaction',
                    who: 'Deployer'
                });
                const v8030 = stdlib.add(v6687, v6724);
                const v8031 = stdlib.le(v8030, stdlib.UInt_max);
                stdlib.assert(v8031, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8036 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v8036, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8044 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v8044, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8052 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v8052, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8165 = stdlib.sub(v8030, v8030);
                const v8166 = stdlib.ge(v8165, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:203:84:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8166, {
                    at: './src/contracts/coin_shop.rsh:203:84:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                ;
                const v8195 = stdlib.sub(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:70:decimal', stdlib.UInt_max, '1'));
                const v8196 = stdlib.ge(v8195, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8196, {
                    at: './src/contracts/coin_shop.rsh:204:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                const v8199 = stdlib.Array_set(v6718, '0', v8195);
                const v8200 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:76:application', stdlib.UInt_max, '2'), v8199);
                ;
                const v8201 = 'gold  ';
                null;
                const v8202 = true;
                await txn4.getOutput('buyer_api_gold', 'v8202', ctc8, v8202);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v8200;
                const cv6687 = v8165;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'buyer_api_silver0_895': {
                const v8435 = v7204[1];
                undefined;
                stdlib.assert(v6713, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:175:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'contract is currently inactive',
                    who: 'Deployer'
                });
                const v8489 = stdlib.ge(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:176:41:decimal', stdlib.UInt_max, '1'));
                stdlib.assert(v8489, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:176:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'balance insufficient for transaction',
                    who: 'Deployer'
                });
                const v8644 = stdlib.add(v6687, v6723);
                const v8645 = stdlib.le(v8644, stdlib.UInt_max);
                stdlib.assert(v8645, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8650 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v8650, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8658 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v8658, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8666 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v8666, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v8855 = stdlib.sub(v8644, v8644);
                const v8856 = stdlib.ge(v8855, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:183:84:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8856, {
                    at: './src/contracts/coin_shop.rsh:183:84:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                ;
                const v8885 = stdlib.sub(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:67:decimal', stdlib.UInt_max, '1'));
                const v8886 = stdlib.ge(v8885, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v8886, {
                    at: './src/contracts/coin_shop.rsh:184:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                const v8889 = stdlib.Array_set(v6716, '0', v8885);
                const v8890 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:76:application', stdlib.UInt_max, '1'), v8889);
                ;
                const v8891 = 'silver';
                null;
                const v8892 = true;
                await txn4.getOutput('buyer_api_silver', 'v8892', ctc8, v8892);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v8890;
                const cv6687 = v8855;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_restock0_895': {
                const v9049 = v7204[1];
                undefined;
                const v9123 = v9049[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:217:22:spread', stdlib.UInt_max, '0')];
                const v9124 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v9124, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:218:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:217:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Deployer'
                });
                const v9126 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '0')];
                const v9127 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '1')];
                const v9128 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '2')];
                const v9259 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v9259, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v9263 = stdlib.add(v6715, v9126);
                const v9264 = stdlib.le(v9263, stdlib.UInt_max);
                stdlib.assert(v9264, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                const v9267 = stdlib.Array_set(v6714, '0', v9263);
                const v9268 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0'), v9267);
                ;
                const v9269 = v9268[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1')];
                const v9270 = v9269[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
                const v9271 = stdlib.add(v9270, v9127);
                const v9272 = stdlib.le(v9271, stdlib.UInt_max);
                stdlib.assert(v9272, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                const v9275 = stdlib.Array_set(v9269, '0', v9271);
                const v9276 = stdlib.Array_set(v9268, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1'), v9275);
                ;
                const v9277 = v9276[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2')];
                const v9278 = v9277[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
                const v9279 = stdlib.add(v9278, v9128);
                const v9280 = stdlib.le(v9279, stdlib.UInt_max);
                stdlib.assert(v9280, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                const v9283 = stdlib.Array_set(v9277, '0', v9279);
                const v9284 = stdlib.Array_set(v9276, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2'), v9283);
                ;
                const v9518 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v9519 = v9518[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v9520 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v9521 = v9520[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v9522 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v9523 = v9522[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v9524 = [v9519, v9521, v9523];
                null;
                const v9528 = true;
                await txn4.getOutput('controller_api_restock', 'v9528', ctc8, v9528);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v9284;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_set_prices0_895': {
                const v9663 = v7204[1];
                undefined;
                const v9761 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v9761, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:235:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:234:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Deployer'
                });
                const v9873 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v9873, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v9878 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v9878, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v9886 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v9886, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v9894 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v9894, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v10154 = v9663[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:234:22:spread', stdlib.UInt_max, '0')];
                null;
                const v10163 = true;
                await txn4.getOutput('controller_api_set_prices', 'v10163', ctc8, v10163);
                const cv6677 = v10154;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v6686;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_terminate0_895': {
                const v10277 = v7204[1];
                undefined;
                const v10394 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v10394, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:292:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:291:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Deployer'
                });
                const v10487 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v10487, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v10492 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v10492, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v10500 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v10500, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v10508 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v10508, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v10793 = true;
                null;
                const v10794 = true;
                await txn4.getOutput('controller_api_terminate', 'v10794', ctc8, v10794);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = true;
                const cv6680 = v7205;
                const cv6686 = v6686;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_toggle_pause0_895': {
                const v10891 = v7204[1];
                undefined;
                const v11027 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v11027, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:252:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:251:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Deployer'
                });
                const v11101 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v11101, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v11106 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v11106, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v11114 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v11114, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v11122 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v11122, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v11422 = v6678 ? false : true;
                await txn4.getOutput('controller_api_toggle_pause', 'v11422', ctc8, v11422);
                const cv6677 = v6677;
                const cv6678 = v11422;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v6686;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
            case 'controller_api_withdraw0_895': {
                const v11505 = v7204[1];
                undefined;
                const v11660 = stdlib.addressEq(v7203, v6637);
                stdlib.assert(v11660, {
                    at: 'reach standard library:57:5:application',
                    fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:272:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:271:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                    msg: 'action not permitted',
                    who: 'Deployer'
                });
                const v11715 = stdlib.le(v6687, stdlib.UInt_max);
                stdlib.assert(v11715, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v11720 = stdlib.le(v6715, stdlib.UInt_max);
                stdlib.assert(v11720, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v11728 = stdlib.le(v6717, stdlib.UInt_max);
                stdlib.assert(v11728, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v11736 = stdlib.le(v6719, stdlib.UInt_max);
                stdlib.assert(v11736, {
                    at: './src/contracts/coin_shop.rsh:123:68:dot',
                    fs: [],
                    msg: 'assume <= UInt.max',
                    who: 'Deployer'
                });
                ;
                const v12083 = stdlib.sub(v6715, v6715);
                const v12084 = stdlib.ge(v12083, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v12084, {
                    at: './src/contracts/coin_shop.rsh:281:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                const v12087 = stdlib.Array_set(v6714, '0', v12083);
                const v12088 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'), v12087);
                ;
                const v12089 = v12088[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1')];
                const v12090 = v12089[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
                const v12094 = stdlib.sub(v12090, v6717);
                const v12095 = stdlib.ge(v12094, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v12095, {
                    at: './src/contracts/coin_shop.rsh:281:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                const v12098 = stdlib.Array_set(v12089, '0', v12094);
                const v12099 = stdlib.Array_set(v12088, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1'), v12098);
                ;
                const v12100 = v12099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2')];
                const v12101 = v12100[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
                const v12105 = stdlib.sub(v12101, v6719);
                const v12106 = stdlib.ge(v12105, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
                stdlib.assert(v12106, {
                    at: './src/contracts/coin_shop.rsh:281:76:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'assume >= 0',
                    who: 'Deployer'
                });
                const v12109 = stdlib.Array_set(v12100, '0', v12105);
                const v12110 = stdlib.Array_set(v12099, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2'), v12109);
                ;
                null;
                const v12112 = true;
                await txn4.getOutput('controller_api_withdraw', 'v12112', ctc8, v12112);
                const cv6677 = v6677;
                const cv6678 = v6678;
                const cv6679 = v6679;
                const cv6680 = v7205;
                const cv6686 = v12110;
                const cv6687 = v6687;
                v6677 = cv6677;
                v6678 = cv6678;
                v6679 = cv6679;
                v6680 = cv6680;
                v6686 = cv6686;
                v6687 = cv6687;
                txn3 = txn4;
                continue;
                break;
            }
        }
    }
    const v12120 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
    const v12121 = v12120[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
    const v12122 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
    const v12123 = v12122[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
    const v12124 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
    const v12125 = v12124[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
    const v12126 = [v12121, v12123, v12125];
    const txn4 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6686, v6687, v12120, v12121, v12123, v12125, v12126],
        evt_cnt: 0,
        funcNum: 3,
        lct: v6680,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [], secs: v12139, time: v12138, didSend: v6008, from: v12137 } = txn4;
            ;
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: undefined
            });
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: v6613
            });
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: v6614
            });
            sim_r.txns.push({
                kind: 'from',
                to: v6637,
                tok: v6615
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: v6615
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: v6614
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: v6613
            });
            sim_r.txns.push({
                kind: 'halt',
                tok: undefined
            });
            sim_r.isHalt = true;
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc9, ctc0, ctc0, ctc0, ctc9, ctc5, ctc8, ctc11, ctc4, ctc10, ctc4, ctc4, ctc4, ctc5],
        waitIfNotPresent: false
    }));
    const { data: [], secs: v12139, time: v12138, didSend: v6008, from: v12137 } = txn4;
    ;
    const v12140 = stdlib.addressEq(v6637, v12137);
    const v12141 = stdlib.addressEq(v6612, v12137);
    const v12142 = v12140 ? true : v12141;
    stdlib.assert(v12142, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
    });
    const v12165 = stdlib.sub(v6687, v6687);
    const v12166 = stdlib.ge(v12165, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12166, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Deployer'
    });
    ;
    const v12173 = stdlib.sub(v12121, v12121);
    const v12174 = stdlib.ge(v12173, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12174, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Deployer'
    });
    const v12177 = stdlib.Array_set(v12120, '0', v12173);
    const v12178 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'), v12177);
    ;
    const v12179 = v12178[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1')];
    const v12180 = v12179[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
    const v12184 = stdlib.sub(v12180, v12123);
    const v12185 = stdlib.ge(v12184, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12185, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Deployer'
    });
    const v12188 = stdlib.Array_set(v12179, '0', v12184);
    const v12189 = stdlib.Array_set(v12178, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v12188);
    ;
    const v12190 = v12189[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '2')];
    const v12191 = v12190[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
    const v12195 = stdlib.sub(v12191, v12125);
    const v12196 = stdlib.ge(v12195, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
    stdlib.assert(v12196, {
        at: 'reach standard library:198:46:application',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'assume >= 0',
        who: 'Deployer'
    });
    ;
    return;
}
;
export async function _buyer_api_bronze5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _buyer_api_bronze5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _buyer_api_bronze5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([]);
    const ctc8 = stdlib.T_Tuple([ctc3]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc7,
        buyer_api_gold0_895: ctc7,
        buyer_api_silver0_895: ctc7,
        controller_api_restock0_895: ctc8,
        controller_api_set_prices0_895: ctc8,
        controller_api_terminate0_895: ctc7,
        controller_api_toggle_pause0_895: ctc7,
        controller_api_withdraw0_895: ctc7
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6727 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_bronze0_895" (defined at: ./src/contracts/coin_shop.rsh:154:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'buyer_api_bronze'
    });
    stdlib.assert(v6713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:155:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_bronze0_895" (defined at: ./src/contracts/coin_shop.rsh:154:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_bronze'
    });
    const v6731 = stdlib.ge(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:156:41:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v6731, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:156:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_bronze0_895" (defined at: ./src/contracts/coin_shop.rsh:154:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_bronze'
    });
    const v6736 = ['buyer_api_bronze0_895', v6727];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6736],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [v6722, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:160:59:decimal', stdlib.UInt_max, '0'), v6613], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:160:62:decimal', stdlib.UInt_max, '0'), v6614], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:160:65:decimal', stdlib.UInt_max, '0'), v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "buyer_api_bronze"
                    });
                    const v7416 = stdlib.add(v6687, v6722);
                    sim_r.txns.push({
                        amt: v6722,
                        kind: 'to',
                        tok: undefined
                    });
                    ;
                    ;
                    ;
                    const v7475 = stdlib.sub(v7416, v7416);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v6637,
                        tok: undefined
                    });
                    const v7505 = stdlib.sub(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:64:decimal', stdlib.UInt_max, '1'));
                    const v7509 = stdlib.Array_set(v6714, '0', v7505);
                    const v7510 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:76:application', stdlib.UInt_max, '0'), v7509);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v7203,
                        tok: v6613
                    });
                    const v7511 = 'bronze';
                    null;
                    const v7512 = true;
                    const v7513 = await txn1.getOutput('buyer_api_bronze', 'v7512', ctc4, v7512);
                    const v14659 = v6677;
                    const v14660 = v6678;
                    const v14661 = v6679;
                    const v14663 = v7510;
                    const v14664 = v7475;
                    if (v6679) {
                        const v14677 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v14678 = v14677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v14679 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v14680 = v14679[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v14681 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v14682 = v14681[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v14683 = [v14678, v14680, v14682];
                        sim_r.isHalt = false;
                    }
                    else {
                        const v14666 = v6678;
                        const v14667 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v14668 = v14667[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v14669 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v14670 = v14669[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v14671 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v14672 = v14671[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v14673 = [v14668, v14670, v14672];
                        const v14674 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                        const v14675 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                        const v14676 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                        sim_r.isHalt = false;
                    }
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            undefined;
            stdlib.assert(v6713, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:155:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'contract is currently inactive',
                who: 'buyer_api_bronze'
            });
            const v7215 = stdlib.ge(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:156:41:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v7215, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:156:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'balance insufficient for transaction',
                who: 'buyer_api_bronze'
            });
            const v7416 = stdlib.add(v6687, v6722);
            const v7417 = stdlib.le(v7416, stdlib.UInt_max);
            stdlib.assert(v7417, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_bronze'
            });
            ;
            const v7422 = stdlib.le(v6715, stdlib.UInt_max);
            stdlib.assert(v7422, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_bronze'
            });
            ;
            const v7430 = stdlib.le(v6717, stdlib.UInt_max);
            stdlib.assert(v7430, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_bronze'
            });
            ;
            const v7438 = stdlib.le(v6719, stdlib.UInt_max);
            stdlib.assert(v7438, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_bronze'
            });
            ;
            const v7475 = stdlib.sub(v7416, v7416);
            const v7476 = stdlib.ge(v7475, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:163:84:application', stdlib.UInt_max, '0'));
            stdlib.assert(v7476, {
                at: './src/contracts/coin_shop.rsh:163:84:application',
                fs: ['at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)'],
                msg: 'assume >= 0',
                who: 'buyer_api_bronze'
            });
            ;
            const v7505 = stdlib.sub(v6715, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:64:decimal', stdlib.UInt_max, '1'));
            const v7506 = stdlib.ge(v7505, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:76:application', stdlib.UInt_max, '0'));
            stdlib.assert(v7506, {
                at: './src/contracts/coin_shop.rsh:164:76:application',
                fs: ['at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)'],
                msg: 'assume >= 0',
                who: 'buyer_api_bronze'
            });
            const v7509 = stdlib.Array_set(v6714, '0', v7505);
            const v7510 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:76:application', stdlib.UInt_max, '0'), v7509);
            ;
            const v7511 = 'bronze';
            null;
            const v7512 = true;
            const v7513 = await txn1.getOutput('buyer_api_bronze', 'v7512', ctc4, v7512);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v7207, v7513), {
                    at: './src/contracts/coin_shop.rsh:154:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:154:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:23:function exp)', 'at ./src/contracts/coin_shop.rsh:168:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)', 'at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)'],
                    msg: 'out',
                    who: 'buyer_api_bronze'
                });
            }
            else {
            }
            const v14659 = v6677;
            const v14660 = v6678;
            const v14661 = v6679;
            const v14663 = v7510;
            const v14664 = v7475;
            if (v6679) {
                const v14677 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v14678 = v14677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v14679 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v14680 = v14679[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v14681 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v14682 = v14681[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v14683 = [v14678, v14680, v14682];
                return;
            }
            else {
                const v14666 = v6678;
                const v14667 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v14668 = v14667[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v14669 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v14670 = v14669[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v14671 = v7510[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v14672 = v14671[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v14673 = [v14668, v14670, v14672];
                const v14674 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v14675 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v14676 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                return;
            }
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            return;
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            return;
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            return;
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            return;
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            return;
            break;
        }
    }
}
;
export async function _buyer_api_gold5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _buyer_api_gold5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _buyer_api_gold5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([]);
    const ctc8 = stdlib.T_Tuple([ctc3]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc7,
        buyer_api_gold0_895: ctc7,
        buyer_api_silver0_895: ctc7,
        controller_api_restock0_895: ctc8,
        controller_api_set_prices0_895: ctc8,
        controller_api_terminate0_895: ctc7,
        controller_api_toggle_pause0_895: ctc7,
        controller_api_withdraw0_895: ctc7
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6753 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_gold0_895" (defined at: ./src/contracts/coin_shop.rsh:194:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'buyer_api_gold'
    });
    stdlib.assert(v6713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:195:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_gold0_895" (defined at: ./src/contracts/coin_shop.rsh:194:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_gold'
    });
    const v6757 = stdlib.ge(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:196:41:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v6757, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:196:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_gold0_895" (defined at: ./src/contracts/coin_shop.rsh:194:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_gold'
    });
    const v6762 = ['buyer_api_gold0_895', v6753];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6762],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [v6724, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:200:59:decimal', stdlib.UInt_max, '0'), v6613], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:200:62:decimal', stdlib.UInt_max, '0'), v6614], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:200:65:decimal', stdlib.UInt_max, '0'), v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "buyer_api_gold"
                    });
                    const v8030 = stdlib.add(v6687, v6724);
                    sim_r.txns.push({
                        amt: v6724,
                        kind: 'to',
                        tok: undefined
                    });
                    ;
                    ;
                    ;
                    const v8165 = stdlib.sub(v8030, v8030);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v6637,
                        tok: undefined
                    });
                    const v8195 = stdlib.sub(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:70:decimal', stdlib.UInt_max, '1'));
                    const v8199 = stdlib.Array_set(v6718, '0', v8195);
                    const v8200 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:76:application', stdlib.UInt_max, '2'), v8199);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v7203,
                        tok: v6615
                    });
                    const v8201 = 'gold  ';
                    null;
                    const v8202 = true;
                    const v8203 = await txn1.getOutput('buyer_api_gold', 'v8202', ctc4, v8202);
                    const v15091 = v6677;
                    const v15092 = v6678;
                    const v15093 = v6679;
                    const v15095 = v8200;
                    const v15096 = v8165;
                    if (v6679) {
                        const v15109 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15110 = v15109[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15111 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v15112 = v15111[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v15113 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v15114 = v15113[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v15115 = [v15110, v15112, v15114];
                        sim_r.isHalt = false;
                    }
                    else {
                        const v15098 = v6678;
                        const v15099 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15100 = v15099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15101 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v15102 = v15101[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v15103 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v15104 = v15103[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v15105 = [v15100, v15102, v15104];
                        const v15106 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                        const v15107 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                        const v15108 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                        sim_r.isHalt = false;
                    }
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            undefined;
            stdlib.assert(v6713, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:195:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'contract is currently inactive',
                who: 'buyer_api_gold'
            });
            const v7852 = stdlib.ge(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:196:41:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v7852, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:196:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'balance insufficient for transaction',
                who: 'buyer_api_gold'
            });
            const v8030 = stdlib.add(v6687, v6724);
            const v8031 = stdlib.le(v8030, stdlib.UInt_max);
            stdlib.assert(v8031, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_gold'
            });
            ;
            const v8036 = stdlib.le(v6715, stdlib.UInt_max);
            stdlib.assert(v8036, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_gold'
            });
            ;
            const v8044 = stdlib.le(v6717, stdlib.UInt_max);
            stdlib.assert(v8044, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_gold'
            });
            ;
            const v8052 = stdlib.le(v6719, stdlib.UInt_max);
            stdlib.assert(v8052, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_gold'
            });
            ;
            const v8165 = stdlib.sub(v8030, v8030);
            const v8166 = stdlib.ge(v8165, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:203:84:application', stdlib.UInt_max, '0'));
            stdlib.assert(v8166, {
                at: './src/contracts/coin_shop.rsh:203:84:application',
                fs: ['at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)'],
                msg: 'assume >= 0',
                who: 'buyer_api_gold'
            });
            ;
            const v8195 = stdlib.sub(v6719, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:70:decimal', stdlib.UInt_max, '1'));
            const v8196 = stdlib.ge(v8195, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:76:application', stdlib.UInt_max, '0'));
            stdlib.assert(v8196, {
                at: './src/contracts/coin_shop.rsh:204:76:application',
                fs: ['at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)'],
                msg: 'assume >= 0',
                who: 'buyer_api_gold'
            });
            const v8199 = stdlib.Array_set(v6718, '0', v8195);
            const v8200 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:204:76:application', stdlib.UInt_max, '2'), v8199);
            ;
            const v8201 = 'gold  ';
            null;
            const v8202 = true;
            const v8203 = await txn1.getOutput('buyer_api_gold', 'v8202', ctc4, v8202);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v7821, v8203), {
                    at: './src/contracts/coin_shop.rsh:194:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:194:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:23:function exp)', 'at ./src/contracts/coin_shop.rsh:208:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)', 'at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)'],
                    msg: 'out',
                    who: 'buyer_api_gold'
                });
            }
            else {
            }
            const v15091 = v6677;
            const v15092 = v6678;
            const v15093 = v6679;
            const v15095 = v8200;
            const v15096 = v8165;
            if (v6679) {
                const v15109 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15110 = v15109[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15111 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v15112 = v15111[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v15113 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v15114 = v15113[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v15115 = [v15110, v15112, v15114];
                return;
            }
            else {
                const v15098 = v6678;
                const v15099 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15100 = v15099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15101 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v15102 = v15101[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v15103 = v8200[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v15104 = v15103[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v15105 = [v15100, v15102, v15104];
                const v15106 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v15107 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v15108 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                return;
            }
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            return;
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            return;
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            return;
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            return;
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            return;
            break;
        }
    }
}
;
export async function _buyer_api_silver5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _buyer_api_silver5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _buyer_api_silver5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([]);
    const ctc8 = stdlib.T_Tuple([ctc3]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc7,
        buyer_api_gold0_895: ctc7,
        buyer_api_silver0_895: ctc7,
        controller_api_restock0_895: ctc8,
        controller_api_set_prices0_895: ctc8,
        controller_api_terminate0_895: ctc7,
        controller_api_toggle_pause0_895: ctc7,
        controller_api_withdraw0_895: ctc7
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6740 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_silver0_895" (defined at: ./src/contracts/coin_shop.rsh:174:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'buyer_api_silver'
    });
    stdlib.assert(v6713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:175:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_silver0_895" (defined at: ./src/contracts/coin_shop.rsh:174:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_silver'
    });
    const v6744 = stdlib.ge(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:176:41:decimal', stdlib.UInt_max, '1'));
    stdlib.assert(v6744, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:176:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runbuyer_api_silver0_895" (defined at: ./src/contracts/coin_shop.rsh:174:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_silver'
    });
    const v6749 = ['buyer_api_silver0_895', v6740];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6749],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [v6723, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:180:59:decimal', stdlib.UInt_max, '0'), v6613], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:180:62:decimal', stdlib.UInt_max, '0'), v6614], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:180:65:decimal', stdlib.UInt_max, '0'), v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "buyer_api_silver"
                    });
                    const v8644 = stdlib.add(v6687, v6723);
                    sim_r.txns.push({
                        amt: v6723,
                        kind: 'to',
                        tok: undefined
                    });
                    ;
                    ;
                    ;
                    const v8855 = stdlib.sub(v8644, v8644);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v6637,
                        tok: undefined
                    });
                    const v8885 = stdlib.sub(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:67:decimal', stdlib.UInt_max, '1'));
                    const v8889 = stdlib.Array_set(v6716, '0', v8885);
                    const v8890 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:76:application', stdlib.UInt_max, '1'), v8889);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v7203,
                        tok: v6614
                    });
                    const v8891 = 'silver';
                    null;
                    const v8892 = true;
                    const v8893 = await txn1.getOutput('buyer_api_silver', 'v8892', ctc4, v8892);
                    const v15523 = v6677;
                    const v15524 = v6678;
                    const v15525 = v6679;
                    const v15527 = v8890;
                    const v15528 = v8855;
                    if (v6679) {
                        const v15541 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15542 = v15541[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15543 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v15544 = v15543[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v15545 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v15546 = v15545[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v15547 = [v15542, v15544, v15546];
                        sim_r.isHalt = false;
                    }
                    else {
                        const v15530 = v6678;
                        const v15531 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15532 = v15531[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v15533 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v15534 = v15533[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v15535 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v15536 = v15535[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v15537 = [v15532, v15534, v15536];
                        const v15538 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                        const v15539 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                        const v15540 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                        sim_r.isHalt = false;
                    }
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            undefined;
            stdlib.assert(v6713, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:175:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'contract is currently inactive',
                who: 'buyer_api_silver'
            });
            const v8489 = stdlib.ge(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:176:41:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v8489, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:176:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp)', 'at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'balance insufficient for transaction',
                who: 'buyer_api_silver'
            });
            const v8644 = stdlib.add(v6687, v6723);
            const v8645 = stdlib.le(v8644, stdlib.UInt_max);
            stdlib.assert(v8645, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_silver'
            });
            ;
            const v8650 = stdlib.le(v6715, stdlib.UInt_max);
            stdlib.assert(v8650, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_silver'
            });
            ;
            const v8658 = stdlib.le(v6717, stdlib.UInt_max);
            stdlib.assert(v8658, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_silver'
            });
            ;
            const v8666 = stdlib.le(v6719, stdlib.UInt_max);
            stdlib.assert(v8666, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'buyer_api_silver'
            });
            ;
            const v8855 = stdlib.sub(v8644, v8644);
            const v8856 = stdlib.ge(v8855, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:183:84:application', stdlib.UInt_max, '0'));
            stdlib.assert(v8856, {
                at: './src/contracts/coin_shop.rsh:183:84:application',
                fs: ['at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)'],
                msg: 'assume >= 0',
                who: 'buyer_api_silver'
            });
            ;
            const v8885 = stdlib.sub(v6717, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:67:decimal', stdlib.UInt_max, '1'));
            const v8886 = stdlib.ge(v8885, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:76:application', stdlib.UInt_max, '0'));
            stdlib.assert(v8886, {
                at: './src/contracts/coin_shop.rsh:184:76:application',
                fs: ['at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)'],
                msg: 'assume >= 0',
                who: 'buyer_api_silver'
            });
            const v8889 = stdlib.Array_set(v6716, '0', v8885);
            const v8890 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:184:76:application', stdlib.UInt_max, '1'), v8889);
            ;
            const v8891 = 'silver';
            null;
            const v8892 = true;
            const v8893 = await txn1.getOutput('buyer_api_silver', 'v8892', ctc4, v8892);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v8435, v8893), {
                    at: './src/contracts/coin_shop.rsh:174:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:174:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:23:function exp)', 'at ./src/contracts/coin_shop.rsh:188:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)', 'at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)'],
                    msg: 'out',
                    who: 'buyer_api_silver'
                });
            }
            else {
            }
            const v15523 = v6677;
            const v15524 = v6678;
            const v15525 = v6679;
            const v15527 = v8890;
            const v15528 = v8855;
            if (v6679) {
                const v15541 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15542 = v15541[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15543 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v15544 = v15543[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v15545 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v15546 = v15545[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v15547 = [v15542, v15544, v15546];
                return;
            }
            else {
                const v15530 = v6678;
                const v15531 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15532 = v15531[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v15533 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v15534 = v15533[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v15535 = v8890[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v15536 = v15535[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v15537 = [v15532, v15534, v15536];
                const v15538 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v15539 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v15540 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                return;
            }
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            return;
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            return;
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            return;
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            return;
            break;
        }
    }
}
;
export async function _controller_api_restock5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([ctc3]);
    const ctc8 = stdlib.T_Tuple([]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc8,
        buyer_api_gold0_895: ctc8,
        buyer_api_silver0_895: ctc8,
        controller_api_restock0_895: ctc7,
        controller_api_set_prices0_895: ctc7,
        controller_api_terminate0_895: ctc8,
        controller_api_toggle_pause0_895: ctc8,
        controller_api_withdraw0_895: ctc8
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6764 = ctc.selfAddress();
    const v6766 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:217:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_restock0_895" (defined at: ./src/contracts/coin_shop.rsh:217:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'controller_api_restock'
    });
    const v6767 = v6766[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
    const v6768 = v6767[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
    const v6769 = v6767[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '1')];
    const v6770 = v6767[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '2')];
    const v6772 = stdlib.addressEq(v6764, v6637);
    stdlib.assert(v6772, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:218:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:217:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_restock0_895" (defined at: ./src/contracts/coin_shop.rsh:217:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'action not permitted',
        who: 'controller_api_restock'
    });
    const v6782 = ['controller_api_restock0_895', v6766];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6782],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:44:decimal', stdlib.UInt_max, '0'), [[v6768, v6613], [v6769, v6614], [v6770, v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "controller_api_restock"
                    });
                    const v9123 = v9049[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:217:22:spread', stdlib.UInt_max, '0')];
                    const v9126 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '0')];
                    const v9127 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '1')];
                    const v9128 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '2')];
                    ;
                    const v9263 = stdlib.add(v6715, v9126);
                    const v9267 = stdlib.Array_set(v6714, '0', v9263);
                    const v9268 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0'), v9267);
                    sim_r.txns.push({
                        amt: v9126,
                        kind: 'to',
                        tok: v6613
                    });
                    const v9269 = v9268[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1')];
                    const v9270 = v9269[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
                    const v9271 = stdlib.add(v9270, v9127);
                    const v9275 = stdlib.Array_set(v9269, '0', v9271);
                    const v9276 = stdlib.Array_set(v9268, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1'), v9275);
                    sim_r.txns.push({
                        amt: v9127,
                        kind: 'to',
                        tok: v6614
                    });
                    const v9277 = v9276[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2')];
                    const v9278 = v9277[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
                    const v9279 = stdlib.add(v9278, v9128);
                    const v9283 = stdlib.Array_set(v9277, '0', v9279);
                    const v9284 = stdlib.Array_set(v9276, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2'), v9283);
                    sim_r.txns.push({
                        amt: v9128,
                        kind: 'to',
                        tok: v6615
                    });
                    const v9518 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                    const v9519 = v9518[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                    const v9520 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                    const v9521 = v9520[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                    const v9522 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                    const v9523 = v9522[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                    const v9524 = [v9519, v9521, v9523];
                    null;
                    const v9528 = true;
                    const v9529 = await txn1.getOutput('controller_api_restock', 'v9528', ctc4, v9528);
                    const v15955 = v6677;
                    const v15956 = v6678;
                    const v15957 = v6679;
                    const v15959 = v9284;
                    const v15960 = v6687;
                    if (v6679) {
                        sim_r.isHalt = false;
                    }
                    else {
                        const v15962 = v6678;
                        const v15970 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                        const v15971 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                        const v15972 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                        sim_r.isHalt = false;
                    }
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            return;
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            undefined;
            const v9123 = v9049[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:217:22:spread', stdlib.UInt_max, '0')];
            const v9124 = stdlib.addressEq(v7203, v6637);
            stdlib.assert(v9124, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:218:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:217:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'action not permitted',
                who: 'controller_api_restock'
            });
            const v9126 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '0')];
            const v9127 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '1')];
            const v9128 = v9123[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:221:47:spread', stdlib.UInt_max, '2')];
            const v9259 = stdlib.le(v6687, stdlib.UInt_max);
            stdlib.assert(v9259, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_restock'
            });
            ;
            const v9263 = stdlib.add(v6715, v9126);
            const v9264 = stdlib.le(v9263, stdlib.UInt_max);
            stdlib.assert(v9264, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_restock'
            });
            const v9267 = stdlib.Array_set(v6714, '0', v9263);
            const v9268 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0'), v9267);
            ;
            const v9269 = v9268[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1')];
            const v9270 = v9269[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
            const v9271 = stdlib.add(v9270, v9127);
            const v9272 = stdlib.le(v9271, stdlib.UInt_max);
            stdlib.assert(v9272, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_restock'
            });
            const v9275 = stdlib.Array_set(v9269, '0', v9271);
            const v9276 = stdlib.Array_set(v9268, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '1'), v9275);
            ;
            const v9277 = v9276[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2')];
            const v9278 = v9277[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '0')];
            const v9279 = stdlib.add(v9278, v9128);
            const v9280 = stdlib.le(v9279, stdlib.UInt_max);
            stdlib.assert(v9280, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_restock'
            });
            const v9283 = stdlib.Array_set(v9277, '0', v9279);
            const v9284 = stdlib.Array_set(v9276, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:123:68:dot', stdlib.UInt_max, '2'), v9283);
            ;
            const v9518 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
            const v9519 = v9518[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
            const v9520 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
            const v9521 = v9520[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
            const v9522 = v9284[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
            const v9523 = v9522[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
            const v9524 = [v9519, v9521, v9523];
            null;
            const v9528 = true;
            const v9529 = await txn1.getOutput('controller_api_restock', 'v9528', ctc4, v9528);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v9049, v9529), {
                    at: './src/contracts/coin_shop.rsh:217:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:217:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:23:function exp)', 'at ./src/contracts/coin_shop.rsh:228:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:222:43:function exp)', 'at ./src/contracts/coin_shop.rsh:222:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:222:43:function exp)'],
                    msg: 'out',
                    who: 'controller_api_restock'
                });
            }
            else {
            }
            const v15955 = v6677;
            const v15956 = v6678;
            const v15957 = v6679;
            const v15959 = v9284;
            const v15960 = v6687;
            if (v6679) {
                return;
            }
            else {
                const v15962 = v6678;
                const v15970 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v15971 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v15972 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                return;
            }
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            return;
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            return;
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            return;
            break;
        }
    }
}
;
export async function _controller_api_set_prices5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([ctc3]);
    const ctc8 = stdlib.T_Tuple([]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc8,
        buyer_api_gold0_895: ctc8,
        buyer_api_silver0_895: ctc8,
        controller_api_restock0_895: ctc7,
        controller_api_set_prices0_895: ctc7,
        controller_api_terminate0_895: ctc8,
        controller_api_toggle_pause0_895: ctc8,
        controller_api_withdraw0_895: ctc8
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6784 = ctc.selfAddress();
    const v6786 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:234:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_set_prices0_895" (defined at: ./src/contracts/coin_shop.rsh:234:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'controller_api_set_prices'
    });
    const v6792 = stdlib.addressEq(v6784, v6637);
    stdlib.assert(v6792, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:235:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:234:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_set_prices0_895" (defined at: ./src/contracts/coin_shop.rsh:234:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'action not permitted',
        who: 'controller_api_set_prices'
    });
    const v6802 = ['controller_api_set_prices0_895', v6786];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6802],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:238:44:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:238:47:decimal', stdlib.UInt_max, '0'), v6613], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:238:50:decimal', stdlib.UInt_max, '0'), v6614], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:238:53:decimal', stdlib.UInt_max, '0'), v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "controller_api_set_prices"
                    });
                    ;
                    ;
                    ;
                    ;
                    const v10154 = v9663[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:234:22:spread', stdlib.UInt_max, '0')];
                    null;
                    const v10163 = true;
                    const v10164 = await txn1.getOutput('controller_api_set_prices', 'v10163', ctc4, v10163);
                    const v16387 = v10154;
                    const v16388 = v6678;
                    const v16389 = v6679;
                    const v16391 = v6686;
                    const v16392 = v6687;
                    if (v6679) {
                        const v16405 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v16406 = v16405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v16407 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v16408 = v16407[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v16409 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v16410 = v16409[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v16411 = [v16406, v16408, v16410];
                        sim_r.isHalt = false;
                    }
                    else {
                        const v16394 = v6678;
                        const v16395 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v16396 = v16395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v16397 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v16398 = v16397[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v16399 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v16400 = v16399[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v16401 = [v16396, v16398, v16400];
                        const v16402 = v10154[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                        const v16403 = v10154[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                        const v16404 = v10154[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                        sim_r.isHalt = false;
                    }
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            return;
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            return;
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            undefined;
            const v9761 = stdlib.addressEq(v7203, v6637);
            stdlib.assert(v9761, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:235:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:234:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'action not permitted',
                who: 'controller_api_set_prices'
            });
            const v9873 = stdlib.le(v6687, stdlib.UInt_max);
            stdlib.assert(v9873, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_set_prices'
            });
            ;
            const v9878 = stdlib.le(v6715, stdlib.UInt_max);
            stdlib.assert(v9878, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_set_prices'
            });
            ;
            const v9886 = stdlib.le(v6717, stdlib.UInt_max);
            stdlib.assert(v9886, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_set_prices'
            });
            ;
            const v9894 = stdlib.le(v6719, stdlib.UInt_max);
            stdlib.assert(v9894, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_set_prices'
            });
            ;
            const v10154 = v9663[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:234:22:spread', stdlib.UInt_max, '0')];
            null;
            const v10163 = true;
            const v10164 = await txn1.getOutput('controller_api_set_prices', 'v10163', ctc4, v10163);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v9663, v10164), {
                    at: './src/contracts/coin_shop.rsh:234:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:234:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:23:function exp)', 'at ./src/contracts/coin_shop.rsh:245:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:239:43:function exp)', 'at ./src/contracts/coin_shop.rsh:239:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:239:43:function exp)'],
                    msg: 'out',
                    who: 'controller_api_set_prices'
                });
            }
            else {
            }
            const v16387 = v10154;
            const v16388 = v6678;
            const v16389 = v6679;
            const v16391 = v6686;
            const v16392 = v6687;
            if (v6679) {
                const v16405 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v16406 = v16405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v16407 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v16408 = v16407[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v16409 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v16410 = v16409[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v16411 = [v16406, v16408, v16410];
                return;
            }
            else {
                const v16394 = v6678;
                const v16395 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v16396 = v16395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v16397 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v16398 = v16397[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v16399 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v16400 = v16399[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v16401 = [v16396, v16398, v16400];
                const v16402 = v10154[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v16403 = v10154[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v16404 = v10154[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                return;
            }
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            return;
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            return;
            break;
        }
    }
}
;
export async function _controller_api_terminate5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([]);
    const ctc8 = stdlib.T_Tuple([ctc3]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc7,
        buyer_api_gold0_895: ctc7,
        buyer_api_silver0_895: ctc7,
        controller_api_restock0_895: ctc8,
        controller_api_set_prices0_895: ctc8,
        controller_api_terminate0_895: ctc7,
        controller_api_toggle_pause0_895: ctc7,
        controller_api_withdraw0_895: ctc7
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6824 = ctc.selfAddress();
    const v6826 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:291:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_terminate0_895" (defined at: ./src/contracts/coin_shop.rsh:291:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'controller_api_terminate'
    });
    const v6827 = stdlib.addressEq(v6824, v6637);
    stdlib.assert(v6827, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:292:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:291:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_terminate0_895" (defined at: ./src/contracts/coin_shop.rsh:291:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'action not permitted',
        who: 'controller_api_terminate'
    });
    const v6832 = ['controller_api_terminate0_895', v6826];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6832],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:44:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:47:decimal', stdlib.UInt_max, '0'), v6613], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:50:decimal', stdlib.UInt_max, '0'), v6614], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:53:decimal', stdlib.UInt_max, '0'), v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "controller_api_terminate"
                    });
                    ;
                    ;
                    ;
                    ;
                    const v10793 = true;
                    null;
                    const v10794 = true;
                    const v10795 = await txn1.getOutput('controller_api_terminate', 'v10794', ctc4, v10794);
                    const v16819 = v6677;
                    const v16820 = v6678;
                    const v16823 = v6686;
                    const v16824 = v6687;
                    const v16837 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                    const v16838 = v16837[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                    const v16839 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                    const v16840 = v16839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                    const v16841 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                    const v16842 = v16841[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                    const v16843 = [v16838, v16840, v16842];
                    sim_r.isHalt = false;
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            return;
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            return;
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            return;
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            undefined;
            const v10394 = stdlib.addressEq(v7203, v6637);
            stdlib.assert(v10394, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:292:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:291:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'action not permitted',
                who: 'controller_api_terminate'
            });
            const v10487 = stdlib.le(v6687, stdlib.UInt_max);
            stdlib.assert(v10487, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_terminate'
            });
            ;
            const v10492 = stdlib.le(v6715, stdlib.UInt_max);
            stdlib.assert(v10492, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_terminate'
            });
            ;
            const v10500 = stdlib.le(v6717, stdlib.UInt_max);
            stdlib.assert(v10500, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_terminate'
            });
            ;
            const v10508 = stdlib.le(v6719, stdlib.UInt_max);
            stdlib.assert(v10508, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_terminate'
            });
            ;
            const v10793 = true;
            null;
            const v10794 = true;
            const v10795 = await txn1.getOutput('controller_api_terminate', 'v10794', ctc4, v10794);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v10277, v10795), {
                    at: './src/contracts/coin_shop.rsh:291:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:291:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:23:function exp)', 'at ./src/contracts/coin_shop.rsh:301:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:296:43:function exp)', 'at ./src/contracts/coin_shop.rsh:296:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:43:function exp)'],
                    msg: 'out',
                    who: 'controller_api_terminate'
                });
            }
            else {
            }
            const v16819 = v6677;
            const v16820 = v6678;
            const v16823 = v6686;
            const v16824 = v6687;
            const v16837 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
            const v16838 = v16837[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
            const v16839 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
            const v16840 = v16839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
            const v16841 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
            const v16842 = v16841[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
            const v16843 = [v16838, v16840, v16842];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            return;
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            return;
            break;
        }
    }
}
;
export async function _controller_api_toggle_pause5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([]);
    const ctc8 = stdlib.T_Tuple([ctc3]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc7,
        buyer_api_gold0_895: ctc7,
        buyer_api_silver0_895: ctc7,
        controller_api_restock0_895: ctc8,
        controller_api_set_prices0_895: ctc8,
        controller_api_terminate0_895: ctc7,
        controller_api_toggle_pause0_895: ctc7,
        controller_api_withdraw0_895: ctc7
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6804 = ctc.selfAddress();
    const v6806 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:251:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_toggle_pause0_895" (defined at: ./src/contracts/coin_shop.rsh:251:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'controller_api_toggle_pause'
    });
    const v6807 = stdlib.addressEq(v6804, v6637);
    stdlib.assert(v6807, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:252:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:251:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_toggle_pause0_895" (defined at: ./src/contracts/coin_shop.rsh:251:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'action not permitted',
        who: 'controller_api_toggle_pause'
    });
    const v6812 = ['controller_api_toggle_pause0_895', v6806];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6812],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:255:44:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:255:47:decimal', stdlib.UInt_max, '0'), v6613], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:255:50:decimal', stdlib.UInt_max, '0'), v6614], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:255:53:decimal', stdlib.UInt_max, '0'), v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "controller_api_toggle_pause"
                    });
                    ;
                    ;
                    ;
                    ;
                    const v11422 = v6678 ? false : true;
                    const v11423 = await txn1.getOutput('controller_api_toggle_pause', 'v11422', ctc4, v11422);
                    const v17251 = v6677;
                    const v17252 = v11422;
                    const v17253 = v6679;
                    const v17255 = v6686;
                    const v17256 = v6687;
                    if (v6679) {
                        const v17269 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17270 = v17269[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17271 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v17272 = v17271[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v17273 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v17274 = v17273[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v17275 = [v17270, v17272, v17274];
                        sim_r.isHalt = false;
                    }
                    else {
                        const v17259 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17260 = v17259[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17261 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v17262 = v17261[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v17263 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v17264 = v17263[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v17265 = [v17260, v17262, v17264];
                        const v17266 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                        const v17267 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                        const v17268 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                        sim_r.isHalt = false;
                    }
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            return;
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            return;
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            return;
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            undefined;
            const v11027 = stdlib.addressEq(v7203, v6637);
            stdlib.assert(v11027, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:252:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:251:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'action not permitted',
                who: 'controller_api_toggle_pause'
            });
            const v11101 = stdlib.le(v6687, stdlib.UInt_max);
            stdlib.assert(v11101, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_toggle_pause'
            });
            ;
            const v11106 = stdlib.le(v6715, stdlib.UInt_max);
            stdlib.assert(v11106, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_toggle_pause'
            });
            ;
            const v11114 = stdlib.le(v6717, stdlib.UInt_max);
            stdlib.assert(v11114, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_toggle_pause'
            });
            ;
            const v11122 = stdlib.le(v6719, stdlib.UInt_max);
            stdlib.assert(v11122, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_toggle_pause'
            });
            ;
            const v11422 = v6678 ? false : true;
            const v11423 = await txn1.getOutput('controller_api_toggle_pause', 'v11422', ctc4, v11422);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v10891, v11423), {
                    at: './src/contracts/coin_shop.rsh:251:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:251:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:23:function exp)', 'at ./src/contracts/coin_shop.rsh:264:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:256:43:function exp)', 'at ./src/contracts/coin_shop.rsh:256:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:256:43:function exp)'],
                    msg: 'out',
                    who: 'controller_api_toggle_pause'
                });
            }
            else {
            }
            const v17251 = v6677;
            const v17252 = v11422;
            const v17253 = v6679;
            const v17255 = v6686;
            const v17256 = v6687;
            if (v6679) {
                const v17269 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17270 = v17269[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17271 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v17272 = v17271[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v17273 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v17274 = v17273[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v17275 = [v17270, v17272, v17274];
                return;
            }
            else {
                const v17259 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17260 = v17259[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17261 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v17262 = v17261[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v17263 = v6686[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v17264 = v17263[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v17265 = [v17260, v17262, v17264];
                const v17266 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v17267 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v17268 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                return;
            }
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            return;
            break;
        }
    }
}
;
export async function _controller_api_withdraw5(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for _controller_api_withdraw5 expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for _controller_api_withdraw5 expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const ctc0 = stdlib.T_Address;
    const ctc1 = stdlib.T_Token;
    const ctc2 = stdlib.T_UInt;
    const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc4 = stdlib.T_Bool;
    const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
    const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
    const ctc7 = stdlib.T_Tuple([]);
    const ctc8 = stdlib.T_Tuple([ctc3]);
    const ctc9 = stdlib.T_Data({
        buyer_api_bronze0_895: ctc7,
        buyer_api_gold0_895: ctc7,
        buyer_api_silver0_895: ctc7,
        controller_api_restock0_895: ctc8,
        controller_api_set_prices0_895: ctc8,
        controller_api_terminate0_895: ctc7,
        controller_api_toggle_pause0_895: ctc7,
        controller_api_withdraw0_895: ctc7
    });
    const ctc10 = stdlib.T_Null;
    const [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
    const v6814 = ctc.selfAddress();
    const v6816 = stdlib.protect(ctc7, await interact.in(), {
        at: './src/contracts/coin_shop.rsh:1:23:application',
        fs: ['at ./src/contracts/coin_shop.rsh:271:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_withdraw0_895" (defined at: ./src/contracts/coin_shop.rsh:271:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'in',
        who: 'controller_api_withdraw'
    });
    const v6817 = stdlib.addressEq(v6814, v6637);
    stdlib.assert(v6817, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:272:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:271:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to "runcontroller_api_withdraw0_895" (defined at: ./src/contracts/coin_shop.rsh:271:22:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)'],
        msg: 'action not permitted',
        who: 'controller_api_withdraw'
    });
    const v6822 = ['controller_api_withdraw0_895', v6816];
    const txn1 = await (ctc.sendrecv({
        args: [v6612, v6613, v6614, v6615, v6637, v6677, v6678, v6679, v6686, v6687, v6713, v6714, v6715, v6716, v6717, v6718, v6719, v6720, v6722, v6723, v6724, v6822],
        evt_cnt: 1,
        funcNum: 4,
        lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        onlyIf: true,
        out_tys: [ctc9],
        pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:275:44:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:275:47:decimal', stdlib.UInt_max, '0'), v6613], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:275:50:decimal', stdlib.UInt_max, '0'), v6614], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:275:53:decimal', stdlib.UInt_max, '0'), v6615]]],
        sim_p: (async (txn1) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
            switch (v7204[0]) {
                case 'buyer_api_bronze0_895': {
                    const v7207 = v7204[1];
                    break;
                }
                case 'buyer_api_gold0_895': {
                    const v7821 = v7204[1];
                    break;
                }
                case 'buyer_api_silver0_895': {
                    const v8435 = v7204[1];
                    break;
                }
                case 'controller_api_restock0_895': {
                    const v9049 = v7204[1];
                    break;
                }
                case 'controller_api_set_prices0_895': {
                    const v9663 = v7204[1];
                    break;
                }
                case 'controller_api_terminate0_895': {
                    const v10277 = v7204[1];
                    break;
                }
                case 'controller_api_toggle_pause0_895': {
                    const v10891 = v7204[1];
                    break;
                }
                case 'controller_api_withdraw0_895': {
                    const v11505 = v7204[1];
                    sim_r.txns.push({
                        kind: 'api',
                        who: "controller_api_withdraw"
                    });
                    ;
                    ;
                    ;
                    ;
                    const v12083 = stdlib.sub(v6715, v6715);
                    const v12087 = stdlib.Array_set(v6714, '0', v12083);
                    const v12088 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'), v12087);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v6637,
                        tok: v6613
                    });
                    const v12089 = v12088[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1')];
                    const v12090 = v12089[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
                    const v12094 = stdlib.sub(v12090, v6717);
                    const v12098 = stdlib.Array_set(v12089, '0', v12094);
                    const v12099 = stdlib.Array_set(v12088, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1'), v12098);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v6637,
                        tok: v6614
                    });
                    const v12100 = v12099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2')];
                    const v12101 = v12100[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
                    const v12105 = stdlib.sub(v12101, v6719);
                    const v12109 = stdlib.Array_set(v12100, '0', v12105);
                    const v12110 = stdlib.Array_set(v12099, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2'), v12109);
                    sim_r.txns.push({
                        kind: 'from',
                        to: v6637,
                        tok: v6615
                    });
                    null;
                    const v12112 = true;
                    const v12113 = await txn1.getOutput('controller_api_withdraw', 'v12112', ctc4, v12112);
                    const v17683 = v6677;
                    const v17684 = v6678;
                    const v17685 = v6679;
                    const v17687 = v12110;
                    const v17688 = v6687;
                    if (v6679) {
                        const v17701 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17702 = v17701[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17703 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v17704 = v17703[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v17705 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v17706 = v17705[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v17707 = [v17702, v17704, v17706];
                        sim_r.isHalt = false;
                    }
                    else {
                        const v17690 = v6678;
                        const v17691 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17692 = v17691[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                        const v17693 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                        const v17694 = v17693[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                        const v17695 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                        const v17696 = v17695[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                        const v17697 = [v17692, v17694, v17696];
                        const v17698 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                        const v17699 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                        const v17700 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                        sim_r.isHalt = false;
                    }
                    break;
                }
            }
            return sim_r;
        }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
        waitIfNotPresent: false
    }));
    const { data: [v7204], secs: v7206, time: v7205, didSend: v5394, from: v7203 } = txn1;
    switch (v7204[0]) {
        case 'buyer_api_bronze0_895': {
            const v7207 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_gold0_895': {
            const v7821 = v7204[1];
            return;
            break;
        }
        case 'buyer_api_silver0_895': {
            const v8435 = v7204[1];
            return;
            break;
        }
        case 'controller_api_restock0_895': {
            const v9049 = v7204[1];
            return;
            break;
        }
        case 'controller_api_set_prices0_895': {
            const v9663 = v7204[1];
            return;
            break;
        }
        case 'controller_api_terminate0_895': {
            const v10277 = v7204[1];
            return;
            break;
        }
        case 'controller_api_toggle_pause0_895': {
            const v10891 = v7204[1];
            return;
            break;
        }
        case 'controller_api_withdraw0_895': {
            const v11505 = v7204[1];
            undefined;
            const v11660 = stdlib.addressEq(v7203, v6637);
            stdlib.assert(v11660, {
                at: 'reach standard library:57:5:application',
                fs: ['at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:272:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp)', 'at ./src/contracts/coin_shop.rsh:271:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp)', 'at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp)', 'at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)'],
                msg: 'action not permitted',
                who: 'controller_api_withdraw'
            });
            const v11715 = stdlib.le(v6687, stdlib.UInt_max);
            stdlib.assert(v11715, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_withdraw'
            });
            ;
            const v11720 = stdlib.le(v6715, stdlib.UInt_max);
            stdlib.assert(v11720, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_withdraw'
            });
            ;
            const v11728 = stdlib.le(v6717, stdlib.UInt_max);
            stdlib.assert(v11728, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_withdraw'
            });
            ;
            const v11736 = stdlib.le(v6719, stdlib.UInt_max);
            stdlib.assert(v11736, {
                at: './src/contracts/coin_shop.rsh:123:68:dot',
                fs: [],
                msg: 'assume <= UInt.max',
                who: 'controller_api_withdraw'
            });
            ;
            const v12083 = stdlib.sub(v6715, v6715);
            const v12084 = stdlib.ge(v12083, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
            stdlib.assert(v12084, {
                at: './src/contracts/coin_shop.rsh:281:76:application',
                fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                msg: 'assume >= 0',
                who: 'controller_api_withdraw'
            });
            const v12087 = stdlib.Array_set(v6714, '0', v12083);
            const v12088 = stdlib.Array_set(v6686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'), v12087);
            ;
            const v12089 = v12088[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1')];
            const v12090 = v12089[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
            const v12094 = stdlib.sub(v12090, v6717);
            const v12095 = stdlib.ge(v12094, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
            stdlib.assert(v12095, {
                at: './src/contracts/coin_shop.rsh:281:76:application',
                fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                msg: 'assume >= 0',
                who: 'controller_api_withdraw'
            });
            const v12098 = stdlib.Array_set(v12089, '0', v12094);
            const v12099 = stdlib.Array_set(v12088, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '1'), v12098);
            ;
            const v12100 = v12099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2')];
            const v12101 = v12100[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0')];
            const v12105 = stdlib.sub(v12101, v6719);
            const v12106 = stdlib.ge(v12105, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '0'));
            stdlib.assert(v12106, {
                at: './src/contracts/coin_shop.rsh:281:76:application',
                fs: ['at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                msg: 'assume >= 0',
                who: 'controller_api_withdraw'
            });
            const v12109 = stdlib.Array_set(v12100, '0', v12105);
            const v12110 = stdlib.Array_set(v12099, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:281:76:application', stdlib.UInt_max, '2'), v12109);
            ;
            null;
            const v12112 = true;
            const v12113 = await txn1.getOutput('controller_api_withdraw', 'v12112', ctc4, v12112);
            if (v5394) {
                stdlib.protect(ctc10, await interact.out(v11505, v12113), {
                    at: './src/contracts/coin_shop.rsh:271:23:application',
                    fs: ['at ./src/contracts/coin_shop.rsh:271:23:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:23:function exp)', 'at ./src/contracts/coin_shop.rsh:285:48:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)', 'at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)'],
                    msg: 'out',
                    who: 'controller_api_withdraw'
                });
            }
            else {
            }
            const v17683 = v6677;
            const v17684 = v6678;
            const v17685 = v6679;
            const v17687 = v12110;
            const v17688 = v6687;
            if (v6679) {
                const v17701 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17702 = v17701[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17703 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v17704 = v17703[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v17705 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v17706 = v17705[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v17707 = [v17702, v17704, v17706];
                return;
            }
            else {
                const v17690 = v6678;
                const v17691 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17692 = v17691[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:53:application', stdlib.UInt_max, '0')];
                const v17693 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '1')];
                const v17694 = v17693[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:70:application', stdlib.UInt_max, '0')];
                const v17695 = v12110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '2')];
                const v17696 = v17695[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:136:87:application', stdlib.UInt_max, '0')];
                const v17697 = [v17692, v17694, v17696];
                const v17698 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '0')];
                const v17699 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '1')];
                const v17700 = v6677[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:45:application', stdlib.UInt_max, '2')];
                return;
            }
            break;
        }
    }
}
;
export async function buyer_api_bronze(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for buyer_api_bronze expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for buyer_api_bronze expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _buyer_api_bronze5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
export async function buyer_api_gold(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for buyer_api_gold expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for buyer_api_gold expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _buyer_api_gold5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
export async function buyer_api_silver(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for buyer_api_silver expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for buyer_api_silver expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _buyer_api_silver5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
export async function controller_api_restock(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for controller_api_restock expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for controller_api_restock expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _controller_api_restock5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
export async function controller_api_set_prices(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _controller_api_set_prices5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
export async function controller_api_terminate(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _controller_api_terminate5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
export async function controller_api_toggle_pause(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _controller_api_toggle_pause5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
export async function controller_api_withdraw(ctcTop, interact) {
    if (typeof (ctcTop) !== 'object' || ctcTop._initialize === undefined) {
        return Promise.reject(new Error(`The backend for controller_api_withdraw expects to receive a contract as its first argument.`));
    }
    if (typeof (interact) !== 'object') {
        return Promise.reject(new Error(`The backend for controller_api_withdraw expects to receive an interact object as its second argument.`));
    }
    const ctc = ctcTop._initialize();
    const stdlib = ctc.stdlib;
    const step = await ctc.getCurrentStep();
    if (step == 5) {
        return _controller_api_withdraw5(ctcTop, interact);
    }
    throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step));
}
;
const _ALGO = {
    ABI: {
        impure: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_bronze()byte`, `buyer_api_gold()byte`, `buyer_api_silver()byte`, `controller_api_restock(uint64[3])byte`, `controller_api_set_prices(uint64[3])byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`, `controller_api_withdraw()byte`],
        pure: [`coin_prices()uint64[3]`, `coin_supply()uint64[3]`, `is_paused()byte`],
        sigs: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_bronze()byte`, `buyer_api_gold()byte`, `buyer_api_silver()byte`, `coin_prices()uint64[3]`, `coin_supply()uint64[3]`, `controller_api_restock(uint64[3])byte`, `controller_api_set_prices(uint64[3])byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`, `controller_api_withdraw()byte`, `is_paused()byte`]
    },
    GlobalNumByteSlice: 4,
    GlobalNumUint: 0,
    LocalNumByteSlice: 0,
    LocalNumUint: 0,
    appApproval: `CCAMAP///////////wEBCAUDoI0GECAoMAQmBQTDuqqJAAEAAQEBAjEYQQkxKWRJIls1ASVbNQIqZCtkUCcEZFCCDwQDr6M8BAodJkkEFCCDHwQtCJTsBD4NOmkERlzXZgRHkTeUBIc8/loEkmDfpgSiYbQABLLIIusEtsF5+QTPUtSzBN/ZIygE6Ca18jYaAI4PCHwIlwj2CNcI8AjzCO0I3QjOCNoI0QiiCNQIjAjlADQYRDQWJA9ENBk0EAhJNQsjDkQ0EIgK/TQWIw5ENBQjDkQ0EiMORDQLSQlJNQwiD0Q0CzQfiAnqNBYkCUk1CyIPRCQ0IjEAiAnUgAZicm9uemU1DSg0DVAxAFCwJDUNgAgAAAAAAAAdWDQNFlEHCFCwNA0WUQcINQQyBjQaNBc0CxZcAFwANAw1GTUaNRs0HEEIfTQaVwARSTUQIls1DzQaVxERIls1DjQaVyIRIls1DTQPFjQOFlA0DRZQNQw0IzQiFlA0IRZQNCAWUDQfUDQeUDQdFlEHCFA0GlA0GRZQNBBQNA8WUDQOFlA0DRZQNAxQgTyvUCEFMgY1AjUBKksBVwB/ZytLAVd/f2cnBExX/itnKTQBFjQCFlBnMRkiEkSICjw0A0AACoAEFR98dTQEULAkQzQYRDQSJA9ENBk0DghJNQsjDkQ0DogJyDQWIw5ENBQjDkQ0EiMORDQLSQlJNQwiD0Q0CzQfiAi1NBIkCUk1CyIPRCQ0IDEAiAifgAZnb2xkAAA1DSg0DVAxAFCwJDUNgAgAAAAAAAAgCjQNFlEHCFCwNA0WUQcINQQyBjQaNBM0CxZcAFwiNAw1GTUaNRtC/sg0GEQ0FCQPRDQZNA8ISTULIw5ENA+ICTc0FiMORDQUIw5ENBIjDkQ0C0kJSTUMIg9ENAs0H4gIJDQUJAlJNQsiD0QkNCExAIgIDoAGc2lsdmVyNQ0oNA1QMQBQsCQ1DYAIAAAAAAAAIrw0DRZRBwhQsDQNFlEHCDUEMgY0GjQVNAsWXABcETQMNRk1GjUbQv43NA1XARg1CzEANB8SRDQLIls1DjQLJVs1DTQLIQdbNQw0GSMORDQWNA4ISTULIw5ENBo0FzQLFlwAXAA1DzQONCKICJw0D1cREUk1ECJbNA0ISTUOIw5ENA80EDQOFlwAXBE1CzQNNCGICHU0C1ciEUk1DyJbNAwISTUOIw5ENAs0DzQOFlwAXCI1DTQMNCCICE40DVcAEVcACDQNVxERVwAIUDQNVyIRVwAIUDULgARjZN7vNAtQsCQ1C4AIAAAAAAAAJTg0CxZRBwhQsDQLFlEHCDUEMgY0DTUaNRtC/VcxADQfEkQ0GSMORDQWIw5ENBQjDkQ0EiMORDQNVwEYNQuABJdTHbc0C1CwJDUMgAgAAAAAAAAnszQMFlEHCFCwNAwWUQcINQQ0CzIGNRs1HkL9BDEANB8SRDQZIw5ENBYjDkQ0FCMORDQSIw5EJDULgAQuET1vNAsWUQcIULAkNQuACAAAAAAAACoqNAsWUQcIULA0CxZRBwg1BCQyBjUbNRxC/LIxADQfEkQ0GSMORDQWIw5ENBQjDkQ0EiMORDQdFDULgAgAAAAAAAAsnjQLFlEHCFCwNAsWUQcINQQ0CzIGNRs1HUL8bjEANB8SRDQZIw5ENBYjDkQ0FCMORDQSIw5ENBZJCUk1DCIPRDQaNBc0DBZcAFwANQs0FjQiNB+IBcQ0C1cREUk1DiJbNBQJSTUNIg9ENAs0DjQNFlwAXBE1DDQUNCE0H4gFmzQMVyIRSTUNIls0EglJNQsiD0Q0EjQgNB+IBX+ABBsVyFo0EVCwJDUOgAgAAAAAAAAvUDQOFlEHCFCwNA4WUQcINQQyBjQMNA00CxZcAFwiNRo1G0L7tIEhrzULIQQ0ARJEiAVMNAsiWzUMNAtXCBk1DYAEKm21WjQMFlA0DVCwNAyIBSI0DSJVjQgD2gPdA+AD4wPmA+kD7APvQvregCEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/loAhAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/240ASEEDEEEWDQBIQUSRIgFOjQeNQQxGSISREL7mzQBIQQMQQRLNAEhBRJEiAUdNAw1BEL/4CWvgAEDNAtQUDULQv8rJa+AAQQ0C1BQNQtC/x2AIQAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv71gCEAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+zYAhAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/qU0ASEEDEEDrzQBIQUSRIgEcTQdFlEHCDUEQv8wMQA1IzQLIls1DDQLJVs1IjQLIQdbNSE0C4EYWzUggAT27avSNAwWUDQiFlA0IRZQNCAWULA0DIgDmoERr0k1DElQNAxQSTULSVcAESWvXABcAEk1DElXERElr1wAXBE1CzQhNCITRDQLSVciESWvXABcIjUNNCA0IhI1DDQgNCETNQs0DBQ0CxBEIQaIBEwiNCIyCogDMSEGiAQ/IjQhMgqIAyQhBogEMiI0IDIKiAMXNCM1HzQiNCETRDQiNCATRDQhNCATRDQMFEQ0C0Q0IzQiFlA0IRZQNCAWUDQNUDQfUIGeAa9QJDIGQvm3JDQBEkRJVwAgNSNJIQhbNSJJIQlbNSFJIQpbNSBJVzgzNQ1XayA1HzQLFzUMgATVFRkUNAwWULA0DIgCqjQjMQASRIAYAAAAAACYloAAAAAAATEtAAAAAAABycOAIiIyBjQNIjUZNRo1GzUcNR01HkL42CEFNAESRIgC/TQLFzUMgATUDGzWNAwWULA0DIgCVjQfMQASNCMxABIRRDQZSQkiD0Q0GTQfiAI0NA9JCUk1DCIPRDQaNBA0DBZcAFwANQs0DzQiNB+IAhA0C1cREUk1DyJbNA4JSTUMIg9ENA40ITQfiAH0NAs0DzQMFlwAXBFXIhEiWzQNCSIPRDQNNCA0H4gB1SI0IDIKMgmIAwciNCEyCjIJiAL9IjQiMgoyCYgC8zEZIQQSRIgC8CIyCjIJiAL0QvipiAGoIQaIAq42GgE1C0L9y4gBmDYaATULQv6tiAGNNhoBNQtC/xWIAYI2GgE1C0L8MyIxNBJEIQsxNRJEIjE2EkQiMTcSRIgBYoGpAq8iIkL4LUL8CkL8TkL8c0L8mEL8sjYaATULQvzCNhoBNQtC/MhC/NNC/PhC/R1C/UJC9wVC+DdC+MVC+VNC+jBC+oBC+s9C+xA0HTUYNBpXABFJNRciWzUWNBpXERFJNRUiWzUUNBpXIhFJNRMiWzUSNBYWNBQWUDQSFlA1ETQeIls1EDQeJVs1DzQeIQdbNQ4iNRw0IzQiFlA0IRZQNCAWUDQfUDQeUDQdFlEHCFA0HBZRBwhQNBpQNBkWUDQYFlEHCFA0F1A0FhZQNBVQNBQWUDQTUDQSFlA0EVA0EBZQNA8WUDQOFlAhBDIGQvdEIrIBJLIQsgeyCLOJIrIBIQuyELIUshGyErOJNAEhBBJEiABaNB41BEL7pTQBIQQSRIgASjQRNQRC+5U0ASEEEkSIADo0HRZRBwg1BEL7gUiJTAlJNQYyCYgAEYkJSUH/7kk1BogA+ImxQv+gsUL/kCQ1A4lJIhJMNAISEUSJSVcAIDUjSSEIWzUiSSEJWzUhSSEKWzUgSVc4IDUfSVdYGDUeSVdwARc1HUlXcQEXNRxJV3IzNRpJgaUBWzUZSVetARc1GElXrhE1F0mBvwFbNRZJV8cRNRVJgdgBWzUUSVfgETUTSYHxAVs1EklX+Rg1EUmBkQJbNRBJgZkCWzUPgaECWzUOiUlXACA1I0khCFs1IkkhCVs1IUkhCls1IElXOCA1H0lXWBg1HklXcAEXNR1JV3EzNRpJgaQBWzUZSVesETUQSYG9AVs1D0mBxQFbNQ5Jgc0BWzUNV9UYNQyJMRY0ACQISTUACUcCOAcyChJEOBAkEkQ4CBJEiTQGCDUGiTEWNAAkCEk1AAlHAzgUMgoSRDgQIQsSRDgRTwISRDgSEkSJsbIVQv5iNAY0B0oPQf6eQv6msbIJQv5E`,
    appApprovalMap: {
        0: `2`,
        1: `2`,
        10: `2`,
        100: `24`,
        1000: `641`,
        1001: `643`,
        1002: `643`,
        1003: `644`,
        1004: `644`,
        1005: `645`,
        1006: `646`,
        1007: `655`,
        1008: `655`,
        1009: `656`,
        101: `24`,
        1010: `657`,
        1011: `658`,
        1012: `661`,
        1013: `661`,
        1014: `662`,
        1015: `663`,
        1016: `664`,
        1017: `667`,
        1018: `667`,
        1019: `668`,
        102: `24`,
        1020: `669`,
        1021: `670`,
        1022: `673`,
        1023: `673`,
        1024: `674`,
        1025: `675`,
        1026: `676`,
        1027: `679`,
        1028: `679`,
        1029: `680`,
        103: `24`,
        1030: `680`,
        1031: `680`,
        1032: `681`,
        1033: `681`,
        1034: `682`,
        1035: `682`,
        1036: `682`,
        1037: `682`,
        1038: `682`,
        1039: `682`,
        104: `24`,
        1040: `683`,
        1041: `683`,
        1042: `684`,
        1043: `685`,
        1044: `687`,
        1045: `688`,
        1046: `688`,
        1047: `689`,
        1048: `689`,
        1049: `689`,
        105: `24`,
        1050: `689`,
        1051: `689`,
        1052: `689`,
        1053: `689`,
        1054: `689`,
        1055: `689`,
        1056: `689`,
        1057: `690`,
        1058: `690`,
        1059: `691`,
        106: `24`,
        1060: `692`,
        1061: `692`,
        1062: `692`,
        1063: `693`,
        1064: `694`,
        1065: `695`,
        1066: `695`,
        1067: `696`,
        1068: `697`,
        1069: `697`,
        107: `24`,
        1070: `697`,
        1071: `698`,
        1072: `698`,
        1073: `699`,
        1074: `699`,
        1075: `700`,
        1076: `700`,
        1077: `701`,
        1078: `701`,
        1079: `702`,
        108: `24`,
        1080: `702`,
        1081: `703`,
        1082: `703`,
        1083: `703`,
        1084: `705`,
        1085: `705`,
        1086: `706`,
        1087: `706`,
        1088: `707`,
        1089: `708`,
        109: `24`,
        1090: `717`,
        1091: `717`,
        1092: `718`,
        1093: `719`,
        1094: `720`,
        1095: `723`,
        1096: `723`,
        1097: `724`,
        1098: `725`,
        1099: `726`,
        11: `2`,
        110: `24`,
        1100: `729`,
        1101: `729`,
        1102: `730`,
        1103: `731`,
        1104: `732`,
        1105: `735`,
        1106: `735`,
        1107: `736`,
        1108: `737`,
        1109: `738`,
        111: `24`,
        1110: `741`,
        1111: `742`,
        1112: `742`,
        1113: `743`,
        1114: `743`,
        1115: `743`,
        1116: `743`,
        1117: `743`,
        1118: `743`,
        1119: `744`,
        112: `24`,
        1120: `744`,
        1121: `745`,
        1122: `746`,
        1123: `746`,
        1124: `746`,
        1125: `747`,
        1126: `748`,
        1127: `750`,
        1128: `751`,
        1129: `751`,
        113: `24`,
        1130: `752`,
        1131: `752`,
        1132: `752`,
        1133: `752`,
        1134: `752`,
        1135: `752`,
        1136: `752`,
        1137: `752`,
        1138: `752`,
        1139: `752`,
        114: `24`,
        1140: `753`,
        1141: `753`,
        1142: `754`,
        1143: `755`,
        1144: `755`,
        1145: `755`,
        1146: `756`,
        1147: `757`,
        1148: `758`,
        1149: `758`,
        115: `24`,
        1150: `759`,
        1151: `760`,
        1152: `760`,
        1153: `760`,
        1154: `761`,
        1155: `761`,
        1156: `762`,
        1157: `763`,
        1158: `763`,
        1159: `764`,
        116: `24`,
        1160: `764`,
        1161: `765`,
        1162: `765`,
        1163: `766`,
        1164: `766`,
        1165: `766`,
        1166: `768`,
        1167: `768`,
        1168: `769`,
        1169: `769`,
        117: `24`,
        1170: `770`,
        1171: `771`,
        1172: `780`,
        1173: `780`,
        1174: `781`,
        1175: `782`,
        1176: `783`,
        1177: `786`,
        1178: `786`,
        1179: `787`,
        118: `24`,
        1180: `788`,
        1181: `789`,
        1182: `792`,
        1183: `792`,
        1184: `793`,
        1185: `794`,
        1186: `795`,
        1187: `798`,
        1188: `798`,
        1189: `799`,
        119: `24`,
        1190: `800`,
        1191: `801`,
        1192: `804`,
        1193: `804`,
        1194: `805`,
        1195: `806`,
        1196: `806`,
        1197: `807`,
        1198: `807`,
        1199: `807`,
        12: `2`,
        120: `24`,
        1200: `807`,
        1201: `807`,
        1202: `807`,
        1203: `807`,
        1204: `807`,
        1205: `807`,
        1206: `807`,
        1207: `808`,
        1208: `808`,
        1209: `809`,
        121: `24`,
        1210: `810`,
        1211: `810`,
        1212: `810`,
        1213: `811`,
        1214: `812`,
        1215: `813`,
        1216: `813`,
        1217: `814`,
        1218: `815`,
        1219: `815`,
        122: `24`,
        1220: `815`,
        1221: `816`,
        1222: `816`,
        1223: `817`,
        1224: `817`,
        1225: `818`,
        1226: `818`,
        1227: `819`,
        1228: `819`,
        1229: `820`,
        123: `24`,
        1230: `820`,
        1231: `821`,
        1232: `821`,
        1233: `821`,
        1234: `823`,
        1235: `823`,
        1236: `824`,
        1237: `824`,
        1238: `825`,
        1239: `826`,
        124: `24`,
        1240: `835`,
        1241: `835`,
        1242: `836`,
        1243: `837`,
        1244: `838`,
        1245: `841`,
        1246: `841`,
        1247: `842`,
        1248: `843`,
        1249: `844`,
        125: `24`,
        1250: `847`,
        1251: `847`,
        1252: `848`,
        1253: `849`,
        1254: `850`,
        1255: `853`,
        1256: `853`,
        1257: `854`,
        1258: `855`,
        1259: `856`,
        126: `24`,
        1260: `859`,
        1261: `859`,
        1262: `860`,
        1263: `861`,
        1264: `862`,
        1265: `863`,
        1266: `863`,
        1267: `864`,
        1268: `865`,
        1269: `866`,
        127: `24`,
        1270: `870`,
        1271: `870`,
        1272: `871`,
        1273: `871`,
        1274: `872`,
        1275: `872`,
        1276: `873`,
        1277: `874`,
        1278: `874`,
        1279: `875`,
        128: `24`,
        1280: `875`,
        1281: `876`,
        1282: `876`,
        1283: `877`,
        1284: `877`,
        1285: `879`,
        1286: `879`,
        1287: `881`,
        1288: `881`,
        1289: `882`,
        129: `24`,
        1290: `882`,
        1291: `882`,
        1292: `883`,
        1293: `883`,
        1294: `884`,
        1295: `884`,
        1296: `884`,
        1297: `885`,
        1298: `886`,
        1299: `886`,
        13: `2`,
        130: `24`,
        1300: `887`,
        1301: `888`,
        1302: `889`,
        1303: `889`,
        1304: `890`,
        1305: `891`,
        1306: `892`,
        1307: `892`,
        1308: `893`,
        1309: `894`,
        131: `24`,
        1310: `895`,
        1311: `899`,
        1312: `899`,
        1313: `900`,
        1314: `900`,
        1315: `901`,
        1316: `901`,
        1317: `902`,
        1318: `903`,
        1319: `903`,
        132: `24`,
        1320: `904`,
        1321: `904`,
        1322: `905`,
        1323: `905`,
        1324: `906`,
        1325: `906`,
        1326: `908`,
        1327: `908`,
        1328: `909`,
        1329: `909`,
        133: `24`,
        1330: `910`,
        1331: `910`,
        1332: `910`,
        1333: `911`,
        1334: `911`,
        1335: `912`,
        1336: `912`,
        1337: `912`,
        1338: `913`,
        1339: `914`,
        134: `24`,
        1340: `914`,
        1341: `915`,
        1342: `916`,
        1343: `917`,
        1344: `917`,
        1345: `918`,
        1346: `919`,
        1347: `920`,
        1348: `920`,
        1349: `921`,
        135: `24`,
        1350: `922`,
        1351: `923`,
        1352: `927`,
        1353: `927`,
        1354: `929`,
        1355: `929`,
        1356: `930`,
        1357: `930`,
        1358: `931`,
        1359: `931`,
        136: `24`,
        1360: `931`,
        1361: `932`,
        1362: `932`,
        1363: `932`,
        1364: `932`,
        1365: `932`,
        1366: `932`,
        1367: `933`,
        1368: `933`,
        1369: `934`,
        137: `24`,
        1370: `935`,
        1371: `937`,
        1372: `938`,
        1373: `938`,
        1374: `939`,
        1375: `939`,
        1376: `939`,
        1377: `939`,
        1378: `939`,
        1379: `939`,
        138: `24`,
        1380: `939`,
        1381: `939`,
        1382: `939`,
        1383: `939`,
        1384: `940`,
        1385: `940`,
        1386: `941`,
        1387: `942`,
        1388: `942`,
        1389: `942`,
        139: `24`,
        1390: `943`,
        1391: `944`,
        1392: `945`,
        1393: `945`,
        1394: `946`,
        1395: `947`,
        1396: `947`,
        1397: `947`,
        1398: `948`,
        1399: `948`,
        14: `2`,
        140: `24`,
        1400: `949`,
        1401: `949`,
        1402: `950`,
        1403: `950`,
        1404: `951`,
        1405: `951`,
        1406: `952`,
        1407: `952`,
        1408: `953`,
        1409: `954`,
        141: `24`,
        1410: `954`,
        1411: `955`,
        1412: `955`,
        1413: `956`,
        1414: `956`,
        1415: `957`,
        1416: `957`,
        1417: `958`,
        1418: `958`,
        1419: `958`,
        142: `25`,
        1420: `960`,
        1421: `960`,
        1422: `961`,
        1423: `962`,
        1424: `962`,
        1425: `964`,
        1426: `964`,
        1427: `965`,
        1428: `965`,
        1429: `966`,
        143: `25`,
        1430: `967`,
        1431: `968`,
        1432: `968`,
        1433: `968`,
        1434: `969`,
        1435: `969`,
        1436: `970`,
        1437: `971`,
        1438: `972`,
        1439: `972`,
        144: `25`,
        1440: `973`,
        1441: `973`,
        1442: `974`,
        1443: `974`,
        1444: `974`,
        1445: `975`,
        1446: `975`,
        1447: `976`,
        1448: `976`,
        1449: `976`,
        145: `26`,
        1450: `976`,
        1451: `976`,
        1452: `976`,
        1453: `977`,
        1454: `977`,
        1455: `978`,
        1456: `979`,
        1457: `980`,
        1458: `980`,
        1459: `981`,
        146: `26`,
        1460: `982`,
        1461: `984`,
        1462: `984`,
        1463: `985`,
        1464: `985`,
        1465: `985`,
        1466: `986`,
        1467: `986`,
        1468: `987`,
        1469: `988`,
        147: `26`,
        1470: `989`,
        1471: `989`,
        1472: `989`,
        1473: `989`,
        1474: `989`,
        1475: `989`,
        1476: `989`,
        1477: `989`,
        1478: `989`,
        1479: `989`,
        148: `26`,
        1480: `989`,
        1481: `989`,
        1482: `989`,
        1483: `989`,
        1484: `989`,
        1485: `989`,
        1486: `989`,
        1487: `989`,
        1488: `990`,
        1489: `990`,
        149: `26`,
        1490: `990`,
        1491: `992`,
        1492: `992`,
        1493: `992`,
        1494: `992`,
        1495: `992`,
        1496: `992`,
        1497: `992`,
        1498: `992`,
        1499: `992`,
        15: `2`,
        150: `26`,
        1500: `992`,
        1501: `992`,
        1502: `992`,
        1503: `992`,
        1504: `992`,
        1505: `992`,
        1506: `992`,
        1507: `992`,
        1508: `992`,
        1509: `992`,
        151: `26`,
        1510: `992`,
        1511: `992`,
        1512: `992`,
        1513: `992`,
        1514: `992`,
        1515: `992`,
        1516: `992`,
        1517: `992`,
        1518: `992`,
        1519: `992`,
        152: `26`,
        1520: `992`,
        1521: `992`,
        1522: `992`,
        1523: `992`,
        1524: `992`,
        1525: `992`,
        1526: `993`,
        1527: `993`,
        1528: `994`,
        1529: `994`,
        153: `26`,
        1530: `994`,
        1531: `996`,
        1532: `996`,
        1533: `996`,
        1534: `996`,
        1535: `996`,
        1536: `996`,
        1537: `996`,
        1538: `996`,
        1539: `996`,
        154: `26`,
        1540: `996`,
        1541: `996`,
        1542: `996`,
        1543: `996`,
        1544: `996`,
        1545: `996`,
        1546: `996`,
        1547: `996`,
        1548: `996`,
        1549: `996`,
        155: `26`,
        1550: `996`,
        1551: `996`,
        1552: `996`,
        1553: `996`,
        1554: `996`,
        1555: `996`,
        1556: `996`,
        1557: `996`,
        1558: `996`,
        1559: `996`,
        156: `26`,
        1560: `996`,
        1561: `996`,
        1562: `996`,
        1563: `996`,
        1564: `996`,
        1565: `996`,
        1566: `997`,
        1567: `997`,
        1568: `998`,
        1569: `998`,
        157: `26`,
        1570: `998`,
        1571: `1000`,
        1572: `1000`,
        1573: `1001`,
        1574: `1001`,
        1575: `1002`,
        1576: `1003`,
        1577: `1003`,
        1578: `1003`,
        1579: `1004`,
        158: `26`,
        1580: `1004`,
        1581: `1005`,
        1582: `1005`,
        1583: `1006`,
        1584: `1007`,
        1585: `1010`,
        1586: `1010`,
        1587: `1010`,
        1588: `1011`,
        1589: `1011`,
        159: `26`,
        1590: `1012`,
        1591: `1012`,
        1592: `1014`,
        1593: `1014`,
        1594: `1015`,
        1595: `1016`,
        1596: `1017`,
        1597: `1019`,
        1598: `1019`,
        1599: `1019`,
        16: `2`,
        160: `26`,
        1600: `1021`,
        1601: `1021`,
        1602: `1022`,
        1603: `1022`,
        1604: `1023`,
        1605: `1024`,
        1606: `1024`,
        1607: `1024`,
        1608: `1025`,
        1609: `1025`,
        161: `26`,
        1610: `1026`,
        1611: `1026`,
        1612: `1027`,
        1613: `1028`,
        1614: `1031`,
        1615: `1031`,
        1616: `1031`,
        1617: `1032`,
        1618: `1032`,
        1619: `1033`,
        162: `26`,
        1620: `1033`,
        1621: `1034`,
        1622: `1034`,
        1623: `1034`,
        1624: `1036`,
        1625: `1037`,
        1626: `1038`,
        1627: `1038`,
        1628: `1038`,
        1629: `1039`,
        163: `26`,
        1630: `1039`,
        1631: `1040`,
        1632: `1041`,
        1633: `1042`,
        1634: `1042`,
        1635: `1043`,
        1636: `1043`,
        1637: `1043`,
        1638: `1045`,
        1639: `1046`,
        164: `26`,
        1640: `1047`,
        1641: `1047`,
        1642: `1047`,
        1643: `1048`,
        1644: `1048`,
        1645: `1049`,
        1646: `1050`,
        1647: `1051`,
        1648: `1051`,
        1649: `1052`,
        165: `26`,
        1650: `1052`,
        1651: `1052`,
        1652: `1054`,
        1653: `1054`,
        1654: `1054`,
        1655: `1054`,
        1656: `1054`,
        1657: `1054`,
        1658: `1054`,
        1659: `1054`,
        166: `26`,
        1660: `1054`,
        1661: `1054`,
        1662: `1054`,
        1663: `1054`,
        1664: `1054`,
        1665: `1054`,
        1666: `1054`,
        1667: `1054`,
        1668: `1054`,
        1669: `1054`,
        167: `26`,
        1670: `1054`,
        1671: `1054`,
        1672: `1054`,
        1673: `1054`,
        1674: `1054`,
        1675: `1054`,
        1676: `1054`,
        1677: `1054`,
        1678: `1054`,
        1679: `1054`,
        168: `26`,
        1680: `1054`,
        1681: `1054`,
        1682: `1054`,
        1683: `1054`,
        1684: `1054`,
        1685: `1054`,
        1686: `1054`,
        1687: `1055`,
        1688: `1055`,
        1689: `1056`,
        169: `26`,
        1690: `1056`,
        1691: `1056`,
        1692: `1058`,
        1693: `1058`,
        1694: `1058`,
        1695: `1058`,
        1696: `1058`,
        1697: `1058`,
        1698: `1058`,
        1699: `1058`,
        17: `2`,
        170: `26`,
        1700: `1058`,
        1701: `1058`,
        1702: `1058`,
        1703: `1058`,
        1704: `1058`,
        1705: `1058`,
        1706: `1058`,
        1707: `1058`,
        1708: `1058`,
        1709: `1058`,
        171: `26`,
        1710: `1058`,
        1711: `1058`,
        1712: `1058`,
        1713: `1058`,
        1714: `1058`,
        1715: `1058`,
        1716: `1058`,
        1717: `1058`,
        1718: `1058`,
        1719: `1058`,
        172: `26`,
        1720: `1058`,
        1721: `1058`,
        1722: `1058`,
        1723: `1058`,
        1724: `1058`,
        1725: `1058`,
        1726: `1058`,
        1727: `1059`,
        1728: `1059`,
        1729: `1060`,
        173: `26`,
        1730: `1060`,
        1731: `1060`,
        1732: `1062`,
        1733: `1062`,
        1734: `1062`,
        1735: `1062`,
        1736: `1062`,
        1737: `1062`,
        1738: `1062`,
        1739: `1062`,
        174: `26`,
        1740: `1062`,
        1741: `1062`,
        1742: `1062`,
        1743: `1062`,
        1744: `1062`,
        1745: `1062`,
        1746: `1062`,
        1747: `1062`,
        1748: `1062`,
        1749: `1062`,
        175: `26`,
        1750: `1062`,
        1751: `1062`,
        1752: `1062`,
        1753: `1062`,
        1754: `1062`,
        1755: `1062`,
        1756: `1062`,
        1757: `1062`,
        1758: `1062`,
        1759: `1062`,
        176: `26`,
        1760: `1062`,
        1761: `1062`,
        1762: `1062`,
        1763: `1062`,
        1764: `1062`,
        1765: `1062`,
        1766: `1062`,
        1767: `1063`,
        1768: `1063`,
        1769: `1064`,
        177: `28`,
        1770: `1064`,
        1771: `1064`,
        1772: `1066`,
        1773: `1066`,
        1774: `1067`,
        1775: `1067`,
        1776: `1068`,
        1777: `1069`,
        1778: `1069`,
        1779: `1069`,
        178: `30`,
        1780: `1070`,
        1781: `1070`,
        1782: `1071`,
        1783: `1071`,
        1784: `1072`,
        1785: `1073`,
        1786: `1076`,
        1787: `1076`,
        1788: `1076`,
        1789: `1077`,
        179: `30`,
        1790: `1077`,
        1791: `1078`,
        1792: `1079`,
        1793: `1079`,
        1794: `1079`,
        1795: `1080`,
        1796: `1080`,
        1797: `1081`,
        1798: `1081`,
        1799: `1081`,
        18: `2`,
        180: `31`,
        1800: `1083`,
        1801: `1083`,
        1802: `1084`,
        1803: `1084`,
        1804: `1085`,
        1805: `1085`,
        1806: `1086`,
        1807: `1087`,
        1808: `1088`,
        1809: `1088`,
        181: `40`,
        1810: `1089`,
        1811: `1089`,
        1812: `1090`,
        1813: `1091`,
        1814: `1092`,
        1815: `1092`,
        1816: `1093`,
        1817: `1093`,
        1818: `1094`,
        1819: `1094`,
        182: `40`,
        1820: `1095`,
        1821: `1096`,
        1822: `1096`,
        1823: `1097`,
        1824: `1097`,
        1825: `1098`,
        1826: `1098`,
        1827: `1099`,
        1828: `1100`,
        1829: `1100`,
        183: `41`,
        1830: `1101`,
        1831: `1101`,
        1832: `1101`,
        1833: `1101`,
        1834: `1101`,
        1835: `1101`,
        1836: `1102`,
        1837: `1102`,
        1838: `1103`,
        1839: `1104`,
        184: `42`,
        1840: `1105`,
        1841: `1105`,
        1842: `1106`,
        1843: `1107`,
        1844: `1108`,
        1845: `1108`,
        1846: `1109`,
        1847: `1110`,
        1848: `1111`,
        1849: `1111`,
        185: `43`,
        1850: `1112`,
        1851: `1113`,
        1852: `1114`,
        1853: `1116`,
        1854: `1116`,
        1855: `1117`,
        1856: `1117`,
        1857: `1117`,
        1858: `1118`,
        1859: `1118`,
        186: `52`,
        1860: `1119`,
        1861: `1120`,
        1862: `1121`,
        1863: `1121`,
        1864: `1122`,
        1865: `1123`,
        1866: `1124`,
        1867: `1124`,
        1868: `1125`,
        1869: `1126`,
        187: `52`,
        1870: `1127`,
        1871: `1127`,
        1872: `1128`,
        1873: `1129`,
        1874: `1129`,
        1875: `1129`,
        1876: `1130`,
        1877: `1131`,
        1878: `1132`,
        1879: `1132`,
        188: `53`,
        1880: `1133`,
        1881: `1133`,
        1882: `1134`,
        1883: `1135`,
        1884: `1135`,
        1885: `1136`,
        1886: `1137`,
        1887: `1137`,
        1888: `1137`,
        1889: `1138`,
        189: `53`,
        1890: `1139`,
        1891: `1140`,
        1892: `1140`,
        1893: `1141`,
        1894: `1141`,
        1895: `1142`,
        1896: `1142`,
        1897: `1143`,
        1898: `1143`,
        1899: `1144`,
        19: `2`,
        190: `54`,
        1900: `1144`,
        1901: `1145`,
        1902: `1146`,
        1903: `1149`,
        1904: `1149`,
        1905: `1150`,
        1906: `1151`,
        1907: `1151`,
        1908: `1151`,
        1909: `1152`,
        191: `55`,
        1910: `1153`,
        1911: `1154`,
        1912: `1154`,
        1913: `1155`,
        1914: `1155`,
        1915: `1156`,
        1916: `1156`,
        1917: `1157`,
        1918: `1157`,
        1919: `1158`,
        192: `56`,
        1920: `1158`,
        1921: `1159`,
        1922: `1160`,
        1923: `1160`,
        1924: `1161`,
        1925: `1161`,
        1926: `1162`,
        1927: `1162`,
        1928: `1163`,
        1929: `1164`,
        193: `56`,
        1930: `1164`,
        1931: `1165`,
        1932: `1165`,
        1933: `1166`,
        1934: `1167`,
        1935: `1167`,
        1936: `1168`,
        1937: `1169`,
        1938: `1172`,
        1939: `1172`,
        194: `57`,
        1940: `1173`,
        1941: `1173`,
        1942: `1173`,
        1943: `1174`,
        1944: `1176`,
        1945: `1176`,
        1946: `1177`,
        1947: `1177`,
        1948: `1178`,
        1949: `1178`,
        195: `58`,
        1950: `1178`,
        1951: `1179`,
        1952: `1179`,
        1953: `1180`,
        1954: `1180`,
        1955: `1180`,
        1956: `1181`,
        1957: `1183`,
        1958: `1183`,
        1959: `1184`,
        196: `59`,
        1960: `1184`,
        1961: `1185`,
        1962: `1185`,
        1963: `1185`,
        1964: `1186`,
        1965: `1186`,
        1966: `1187`,
        1967: `1187`,
        1968: `1187`,
        1969: `1188`,
        197: `62`,
        1970: `1190`,
        1971: `1190`,
        1972: `1191`,
        1973: `1191`,
        1974: `1192`,
        1975: `1192`,
        1976: `1192`,
        1977: `1193`,
        1978: `1193`,
        1979: `1194`,
        198: `62`,
        1980: `1194`,
        1981: `1195`,
        1982: `1195`,
        1983: `1196`,
        1984: `1196`,
        1985: `1197`,
        1986: `1198`,
        1987: `1211`,
        1988: `1211`,
        1989: `1212`,
        199: `63`,
        1990: `1212`,
        1991: `1213`,
        1992: `1214`,
        1993: `1227`,
        1994: `1227`,
        1995: `1228`,
        1996: `1228`,
        1997: `1229`,
        1998: `1230`,
        1999: `1243`,
        2: `2`,
        20: `2`,
        200: `63`,
        2000: `1243`,
        2001: `1244`,
        2002: `1245`,
        2003: `1258`,
        2004: `1258`,
        2005: `1259`,
        2006: `1273`,
        2007: `1273`,
        2008: `1274`,
        2009: `1274`,
        201: `63`,
        2010: `1275`,
        2011: `1276`,
        2012: `1277`,
        2013: `1277`,
        2014: `1278`,
        2015: `1279`,
        2016: `1280`,
        2017: `1280`,
        2018: `1281`,
        2019: `1282`,
        202: `66`,
        2020: `1283`,
        2021: `1283`,
        2022: `1284`,
        2023: `1285`,
        2024: `1285`,
        2025: `1286`,
        2026: `1287`,
        2027: `1287`,
        2028: `1287`,
        2029: `1288`,
        203: `66`,
        2030: `1289`,
        2031: `1290`,
        2032: `1291`,
        2033: `1291`,
        2034: `1292`,
        2035: `1292`,
        2036: `1292`,
        2037: `1294`,
        2038: `1295`,
        2039: `1295`,
        204: `67`,
        2040: `1296`,
        2041: `1297`,
        2042: `1299`,
        2043: `1300`,
        2044: `1300`,
        2045: `1300`,
        2046: `1301`,
        2047: `1301`,
        2048: `1302`,
        2049: `1303`,
        205: `68`,
        2050: `1303`,
        2051: `1304`,
        2052: `1305`,
        2053: `1305`,
        2054: `1306`,
        2055: `1307`,
        2056: `1307`,
        2057: `1308`,
        2058: `1309`,
        2059: `1309`,
        206: `69`,
        2060: `1310`,
        2061: `1311`,
        2062: `1311`,
        2063: `1312`,
        2064: `1313`,
        2065: `1313`,
        2066: `1314`,
        2067: `1315`,
        2068: `1315`,
        2069: `1315`,
        207: `72`,
        2070: `1316`,
        2071: `1316`,
        2072: `1317`,
        2073: `1317`,
        2074: `1317`,
        2075: `1318`,
        2076: `1318`,
        2077: `1319`,
        2078: `1319`,
        2079: `1320`,
        208: `72`,
        2080: `1321`,
        2081: `1321`,
        2082: `1322`,
        2083: `1322`,
        2084: `1322`,
        2085: `1322`,
        2086: `1322`,
        2087: `1322`,
        2088: `1323`,
        2089: `1323`,
        209: `73`,
        2090: `1324`,
        2091: `1325`,
        2092: `1326`,
        2093: `1328`,
        2094: `1328`,
        2095: `1329`,
        2096: `1329`,
        2097: `1329`,
        2098: `1330`,
        2099: `1330`,
        21: `2`,
        210: `74`,
        2100: `1331`,
        2101: `1331`,
        2102: `1332`,
        2103: `1333`,
        2104: `1336`,
        2105: `1336`,
        2106: `1336`,
        2107: `1336`,
        2108: `1336`,
        2109: `1336`,
        211: `75`,
        2110: `1336`,
        2111: `1336`,
        2112: `1336`,
        2113: `1336`,
        2114: `1336`,
        2115: `1336`,
        2116: `1336`,
        2117: `1336`,
        2118: `1336`,
        2119: `1336`,
        212: `78`,
        2120: `1336`,
        2121: `1336`,
        2122: `1336`,
        2123: `1336`,
        2124: `1336`,
        2125: `1336`,
        2126: `1336`,
        2127: `1336`,
        2128: `1336`,
        2129: `1336`,
        213: `78`,
        2130: `1337`,
        2131: `1338`,
        2132: `1339`,
        2133: `1339`,
        2134: `1340`,
        2135: `1340`,
        2136: `1341`,
        2137: `1342`,
        2138: `1342`,
        2139: `1343`,
        214: `79`,
        2140: `1343`,
        2141: `1344`,
        2142: `1344`,
        2143: `1345`,
        2144: `1345`,
        2145: `1346`,
        2146: `1346`,
        2147: `1347`,
        2148: `1347`,
        2149: `1348`,
        215: `80`,
        2150: `1348`,
        2151: `1348`,
        2152: `1350`,
        2153: `1350`,
        2154: `1351`,
        2155: `1351`,
        2156: `1352`,
        2157: `1353`,
        2158: `1354`,
        2159: `1354`,
        216: `81`,
        2160: `1354`,
        2161: `1355`,
        2162: `1355`,
        2163: `1356`,
        2164: `1357`,
        2165: `1357`,
        2166: `1358`,
        2167: `1358`,
        2168: `1358`,
        2169: `1358`,
        217: `84`,
        2170: `1358`,
        2171: `1358`,
        2172: `1359`,
        2173: `1359`,
        2174: `1360`,
        2175: `1361`,
        2176: `1362`,
        2177: `1364`,
        2178: `1364`,
        2179: `1365`,
        218: `84`,
        2180: `1365`,
        2181: `1365`,
        2182: `1366`,
        2183: `1366`,
        2184: `1367`,
        2185: `1367`,
        2186: `1368`,
        2187: `1369`,
        2188: `1369`,
        2189: `1370`,
        219: `85`,
        2190: `1370`,
        2191: `1371`,
        2192: `1372`,
        2193: `1373`,
        2194: `1377`,
        2195: `1377`,
        2196: `1378`,
        2197: `1379`,
        2198: `1380`,
        2199: `1381`,
        22: `2`,
        220: `86`,
        2200: `1382`,
        2201: `1386`,
        2202: `1386`,
        2203: `1388`,
        2204: `1388`,
        2205: `1389`,
        2206: `1389`,
        2207: `1389`,
        2208: `1390`,
        2209: `1390`,
        221: `87`,
        2210: `1391`,
        2211: `1392`,
        2212: `1393`,
        2213: `1394`,
        2214: `1394`,
        2215: `1395`,
        2216: `1396`,
        2217: `1397`,
        2218: `1401`,
        2219: `1401`,
        222: `88`,
        2220: `1402`,
        2221: `1402`,
        2222: `1403`,
        2223: `1403`,
        2224: `1404`,
        2225: `1405`,
        2226: `1405`,
        2227: `1406`,
        2228: `1406`,
        2229: `1407`,
        223: `88`,
        2230: `1407`,
        2231: `1408`,
        2232: `1408`,
        2233: `1410`,
        2234: `1410`,
        2235: `1411`,
        2236: `1411`,
        2237: `1412`,
        2238: `1412`,
        2239: `1412`,
        224: `89`,
        2240: `1413`,
        2241: `1413`,
        2242: `1414`,
        2243: `1414`,
        2244: `1414`,
        2245: `1415`,
        2246: `1416`,
        2247: `1416`,
        2248: `1417`,
        2249: `1418`,
        225: `90`,
        2250: `1419`,
        2251: `1419`,
        2252: `1420`,
        2253: `1421`,
        2254: `1422`,
        2255: `1422`,
        2256: `1423`,
        2257: `1424`,
        2258: `1425`,
        2259: `1429`,
        226: `91`,
        2260: `1429`,
        2261: `1431`,
        2262: `1431`,
        2263: `1432`,
        2264: `1432`,
        2265: `1433`,
        2266: `1433`,
        2267: `1433`,
        2268: `1434`,
        2269: `1434`,
        227: `95`,
        2270: `1435`,
        2271: `1435`,
        2272: `1436`,
        2273: `1436`,
        2274: `1437`,
        2275: `1438`,
        2276: `1438`,
        2277: `1439`,
        2278: `1439`,
        2279: `1440`,
        228: `95`,
        2280: `1440`,
        2281: `1440`,
        2282: `1441`,
        2283: `1442`,
        2284: `1443`,
        2285: `1443`,
        2286: `1444`,
        2287: `1445`,
        2288: `1446`,
        2289: `1447`,
        229: `97`,
        2290: `1451`,
        2291: `1451`,
        2292: `1453`,
        2293: `1453`,
        2294: `1454`,
        2295: `1454`,
        2296: `1455`,
        2297: `1455`,
        2298: `1455`,
        2299: `1457`,
        23: `2`,
        230: `97`,
        2300: `1458`,
        2301: `1458`,
        2302: `1459`,
        2303: `1459`,
        2304: `1460`,
        2305: `1460`,
        2306: `1461`,
        2307: `1461`,
        2308: `1461`,
        2309: `1462`,
        231: `98`,
        2310: `1463`,
        2311: `1463`,
        2312: `1464`,
        2313: `1464`,
        2314: `1465`,
        2315: `1465`,
        2316: `1466`,
        2317: `1466`,
        2318: `1466`,
        2319: `1467`,
        232: `98`,
        2320: `1468`,
        2321: `1468`,
        2322: `1469`,
        2323: `1469`,
        2324: `1470`,
        2325: `1470`,
        2326: `1471`,
        2327: `1471`,
        2328: `1471`,
        2329: `1473`,
        233: `98`,
        2330: `1473`,
        2331: `1474`,
        2332: `1474`,
        2333: `1475`,
        2334: `1476`,
        2335: `1478`,
        2336: `1478`,
        2337: `1478`,
        2338: `1480`,
        2339: `1481`,
        234: `99`,
        2340: `1481`,
        2341: `1482`,
        2342: `1482`,
        2343: `1483`,
        2344: `1483`,
        2345: `1483`,
        2346: `1484`,
        2347: `1484`,
        2348: `1484`,
        2349: `1486`,
        235: `99`,
        2350: `1486`,
        2351: `1486`,
        2352: `1487`,
        2353: `1487`,
        2354: `1488`,
        2355: `1488`,
        2356: `1488`,
        2357: `1489`,
        2358: `1489`,
        2359: `1489`,
        236: `100`,
        2360: `1490`,
        2361: `1490`,
        2362: `1491`,
        2363: `1491`,
        2364: `1491`,
        2365: `1493`,
        2366: `1493`,
        2367: `1493`,
        2368: `1494`,
        2369: `1494`,
        237: `101`,
        2370: `1494`,
        2371: `1495`,
        2372: `1495`,
        2373: `1496`,
        2374: `1496`,
        2375: `1496`,
        2376: `1498`,
        2377: `1498`,
        2378: `1498`,
        2379: `1499`,
        238: `102`,
        2380: `1499`,
        2381: `1499`,
        2382: `1500`,
        2383: `1500`,
        2384: `1501`,
        2385: `1501`,
        2386: `1501`,
        2387: `1503`,
        2388: `1503`,
        2389: `1503`,
        239: `103`,
        2390: `1504`,
        2391: `1504`,
        2392: `1504`,
        2393: `1505`,
        2394: `1505`,
        2395: `1506`,
        2396: `1506`,
        2397: `1506`,
        2398: `1508`,
        2399: `1509`,
        24: `2`,
        240: `103`,
        2400: `1509`,
        2401: `1510`,
        2402: `1511`,
        2403: `1512`,
        2404: `1512`,
        2405: `1513`,
        2406: `1513`,
        2407: `1514`,
        2408: `1515`,
        2409: `1516`,
        241: `104`,
        2410: `1517`,
        2411: `1517`,
        2412: `1518`,
        2413: `1519`,
        2414: `1520`,
        2415: `1521`,
        2416: `1521`,
        2417: `1522`,
        2418: `1523`,
        2419: `1524`,
        242: `105`,
        2420: `1524`,
        2421: `1524`,
        2422: `1525`,
        2423: `1525`,
        2424: `1525`,
        2425: `1526`,
        2426: `1527`,
        2427: `1528`,
        2428: `1529`,
        2429: `1529`,
        243: `106`,
        2430: `1529`,
        2431: `1531`,
        2432: `1531`,
        2433: `1531`,
        2434: `1533`,
        2435: `1533`,
        2436: `1533`,
        2437: `1535`,
        2438: `1535`,
        2439: `1535`,
        244: `110`,
        2440: `1537`,
        2441: `1537`,
        2442: `1537`,
        2443: `1539`,
        2444: `1539`,
        2445: `1539`,
        2446: `1541`,
        2447: `1541`,
        2448: `1541`,
        2449: `1542`,
        245: `112`,
        2450: `1542`,
        2451: `1543`,
        2452: `1543`,
        2453: `1543`,
        2454: `1545`,
        2455: `1545`,
        2456: `1545`,
        2457: `1546`,
        2458: `1546`,
        2459: `1547`,
        246: `112`,
        2460: `1547`,
        2461: `1547`,
        2462: `1549`,
        2463: `1549`,
        2464: `1549`,
        2465: `1551`,
        2466: `1551`,
        2467: `1551`,
        2468: `1553`,
        2469: `1553`,
        247: `114`,
        2470: `1553`,
        2471: `1555`,
        2472: `1555`,
        2473: `1555`,
        2474: `1557`,
        2475: `1557`,
        2476: `1557`,
        2477: `1559`,
        2478: `1559`,
        2479: `1559`,
        248: `114`,
        2480: `1561`,
        2481: `1561`,
        2482: `1561`,
        2483: `1563`,
        2484: `1563`,
        2485: `1563`,
        2486: `1565`,
        2487: `1565`,
        2488: `1565`,
        2489: `1567`,
        249: `115`,
        2490: `1567`,
        2491: `1567`,
        2492: `1569`,
        2493: `1569`,
        2494: `1569`,
        2495: `1571`,
        2496: `1571`,
        2497: `1571`,
        2498: `1573`,
        2499: `1573`,
        25: `2`,
        250: `115`,
        2500: `1574`,
        2501: `1574`,
        2502: `1575`,
        2503: `1575`,
        2504: `1576`,
        2505: `1576`,
        2506: `1576`,
        2507: `1577`,
        2508: `1578`,
        2509: `1578`,
        251: `115`,
        2510: `1579`,
        2511: `1580`,
        2512: `1581`,
        2513: `1581`,
        2514: `1582`,
        2515: `1582`,
        2516: `1583`,
        2517: `1583`,
        2518: `1583`,
        2519: `1584`,
        252: `116`,
        2520: `1585`,
        2521: `1585`,
        2522: `1586`,
        2523: `1587`,
        2524: `1588`,
        2525: `1588`,
        2526: `1589`,
        2527: `1589`,
        2528: `1590`,
        2529: `1590`,
        253: `116`,
        2530: `1590`,
        2531: `1591`,
        2532: `1592`,
        2533: `1592`,
        2534: `1593`,
        2535: `1594`,
        2536: `1595`,
        2537: `1595`,
        2538: `1596`,
        2539: `1596`,
        254: `116`,
        2540: `1597`,
        2541: `1598`,
        2542: `1598`,
        2543: `1599`,
        2544: `1600`,
        2545: `1601`,
        2546: `1601`,
        2547: `1602`,
        2548: `1603`,
        2549: `1604`,
        255: `116`,
        2550: `1604`,
        2551: `1605`,
        2552: `1605`,
        2553: `1606`,
        2554: `1607`,
        2555: `1608`,
        2556: `1608`,
        2557: `1609`,
        2558: `1609`,
        2559: `1610`,
        256: `116`,
        2560: `1611`,
        2561: `1612`,
        2562: `1612`,
        2563: `1613`,
        2564: `1613`,
        2565: `1614`,
        2566: `1614`,
        2567: `1615`,
        2568: `1616`,
        2569: `1616`,
        257: `116`,
        2570: `1617`,
        2571: `1618`,
        2572: `1618`,
        2573: `1620`,
        2574: `1620`,
        2575: `1621`,
        2576: `1621`,
        2577: `1622`,
        2578: `1623`,
        2579: `1624`,
        258: `116`,
        2580: `1624`,
        2581: `1625`,
        2582: `1626`,
        2583: `1627`,
        2584: `1627`,
        2585: `1628`,
        2586: `1629`,
        2587: `1630`,
        2588: `1630`,
        2589: `1631`,
        259: `116`,
        2590: `1632`,
        2591: `1632`,
        2592: `1633`,
        2593: `1634`,
        2594: `1634`,
        2595: `1635`,
        2596: `1636`,
        2597: `1636`,
        2598: `1636`,
        2599: `1637`,
        26: `2`,
        260: `117`,
        2600: `1638`,
        2601: `1638`,
        2602: `1639`,
        2603: `1640`,
        2604: `1640`,
        2605: `1640`,
        2606: `1641`,
        2607: `1642`,
        2608: `1642`,
        2609: `1643`,
        261: `117`,
        2610: `1644`,
        2611: `1644`,
        2612: `1645`,
        2613: `1646`,
        2614: `1647`,
        2615: `1647`,
        2616: `1648`,
        2617: `1649`,
        2618: `1649`,
        2619: `1649`,
        262: `118`,
        2620: `1650`,
        2621: `1651`,
        2622: `1651`,
        2623: `1652`,
        2624: `1653`,
        2625: `1653`,
        2626: `1654`,
        2627: `1655`,
        2628: `1656`,
        2629: `1656`,
        263: `119`,
        2630: `1657`,
        2631: `1658`,
        2632: `1658`,
        2633: `1659`,
        2634: `1660`,
        2635: `1661`,
        2636: `1661`,
        2637: `1662`,
        2638: `1663`,
        2639: `1663`,
        264: `119`,
        2640: `1664`,
        2641: `1665`,
        2642: `1666`,
        2643: `1666`,
        2644: `1667`,
        2645: `1668`,
        2646: `1668`,
        2647: `1669`,
        2648: `1670`,
        2649: `1671`,
        265: `120`,
        2650: `1671`,
        2651: `1672`,
        2652: `1673`,
        2653: `1674`,
        2654: `1674`,
        2655: `1675`,
        2656: `1676`,
        2657: `1677`,
        2658: `1677`,
        2659: `1678`,
        266: `121`,
        2660: `1678`,
        2661: `1679`,
        2662: `1679`,
        2663: `1679`,
        2664: `1681`,
        2665: `1682`,
        2666: `1682`,
        2667: `1683`,
        2668: `1684`,
        2669: `1684`,
        267: `121`,
        2670: `1685`,
        2671: `1685`,
        2672: `1686`,
        2673: `1686`,
        2674: `1687`,
        2675: `1688`,
        2676: `1690`,
        2677: `1691`,
        2678: `1691`,
        2679: `1692`,
        268: `122`,
        2680: `1692`,
        2681: `1693`,
        2682: `1693`,
        2683: `1694`,
        2684: `1694`,
        2685: `1695`,
        2686: `1695`,
        2687: `1696`,
        2688: `1696`,
        2689: `1697`,
        269: `123`,
        2690: `1698`,
        2691: `1700`,
        2692: `1700`,
        2693: `1701`,
        2694: `1701`,
        2695: `1702`,
        2696: `1703`,
        2697: `1706`,
        2698: `1706`,
        2699: `1706`,
        27: `2`,
        270: `125`,
        2700: `1707`,
        2701: `1707`,
        2702: `1708`,
        2703: `1708`,
        2704: `1709`,
        2705: `1709`,
        2706: `1709`,
        2707: `1711`,
        2708: `1711`,
        2709: `1712`,
        271: `126`,
        2710: `1712`,
        2711: `1713`,
        2712: `1714`,
        2713: `1717`,
        2714: `1717`,
        2715: `1717`,
        2716: `1718`,
        2717: `1718`,
        2718: `1719`,
        2719: `1719`,
        272: `126`,
        2720: `1720`,
        2721: `1720`,
        2722: `1720`,
        2723: `1722`,
        2724: `1722`,
        2725: `1723`,
        2726: `1723`,
        2727: `1724`,
        2728: `1725`,
        2729: `1728`,
        273: `127`,
        2730: `1728`,
        2731: `1728`,
        2732: `1729`,
        2733: `1729`,
        2734: `1730`,
        2735: `1731`,
        2736: `1731`,
        2737: `1731`,
        2738: `1732`,
        2739: `1732`,
        274: `127`,
        2740: `1733`,
        2741: `1733`,
        2742: `1733`,
        2743: `1735`,
        2744: `1736`,
        2745: `1738`,
        2746: `1739`,
        2747: `1740`,
        2748: `1741`,
        2749: `1741`,
        275: `127`,
        2750: `1742`,
        2751: `1742`,
        2752: `1743`,
        2753: `1743`,
        2754: `1743`,
        2755: `1744`,
        2756: `1746`,
        2757: `1747`,
        2758: `1748`,
        2759: `1748`,
        276: `127`,
        2760: `1748`,
        2761: `1749`,
        2762: `1750`,
        2763: `1750`,
        2764: `1751`,
        2765: `1751`,
        2766: `1751`,
        2767: `1752`,
        2768: `1754`,
        2769: `1755`,
        277: `127`,
        2770: `1755`,
        2771: `1755`,
        2772: `1757`,
        2773: `1758`,
        2774: `1758`,
        2775: `1758`,
        2776: `1760`,
        2777: `1761`,
        2778: `1761`,
        2779: `1762`,
        278: `127`,
        2780: `1764`,
        2781: `1765`,
        2782: `1766`,
        2783: `1767`,
        2784: `1768`,
        2785: `1768`,
        2786: `1769`,
        2787: `1770`,
        2788: `1771`,
        2789: `1772`,
        279: `127`,
        2790: `1774`,
        2791: `1775`,
        2792: `1775`,
        2793: `1775`,
        2794: `1776`,
        2795: `1776`,
        2796: `1777`,
        2797: `1778`,
        2798: `1778`,
        2799: `1779`,
        28: `2`,
        280: `127`,
        2800: `1780`,
        2801: `1780`,
        2802: `1781`,
        2803: `1782`,
        2804: `1782`,
        2805: `1783`,
        2806: `1784`,
        2807: `1784`,
        2808: `1785`,
        2809: `1786`,
        281: `127`,
        2810: `1786`,
        2811: `1787`,
        2812: `1788`,
        2813: `1788`,
        2814: `1789`,
        2815: `1790`,
        2816: `1790`,
        2817: `1790`,
        2818: `1791`,
        2819: `1791`,
        282: `127`,
        2820: `1792`,
        2821: `1793`,
        2822: `1793`,
        2823: `1793`,
        2824: `1794`,
        2825: `1794`,
        2826: `1795`,
        2827: `1796`,
        2828: `1796`,
        2829: `1796`,
        283: `128`,
        2830: `1797`,
        2831: `1798`,
        2832: `1798`,
        2833: `1799`,
        2834: `1800`,
        2835: `1800`,
        2836: `1800`,
        2837: `1801`,
        2838: `1802`,
        2839: `1802`,
        284: `128`,
        2840: `1803`,
        2841: `1804`,
        2842: `1804`,
        2843: `1804`,
        2844: `1805`,
        2845: `1805`,
        2846: `1806`,
        2847: `1807`,
        2848: `1807`,
        2849: `1807`,
        285: `129`,
        2850: `1808`,
        2851: `1809`,
        2852: `1809`,
        2853: `1810`,
        2854: `1811`,
        2855: `1811`,
        2856: `1811`,
        2857: `1812`,
        2858: `1813`,
        2859: `1813`,
        286: `130`,
        2860: `1814`,
        2861: `1815`,
        2862: `1815`,
        2863: `1815`,
        2864: `1816`,
        2865: `1816`,
        2866: `1817`,
        2867: `1818`,
        2868: `1818`,
        2869: `1818`,
        287: `130`,
        2870: `1819`,
        2871: `1820`,
        2872: `1820`,
        2873: `1821`,
        2874: `1822`,
        2875: `1822`,
        2876: `1822`,
        2877: `1823`,
        2878: `1823`,
        2879: `1824`,
        288: `130`,
        2880: `1825`,
        2881: `1825`,
        2882: `1825`,
        2883: `1826`,
        2884: `1827`,
        2885: `1827`,
        2886: `1828`,
        2887: `1829`,
        2888: `1829`,
        2889: `1829`,
        289: `131`,
        2890: `1830`,
        2891: `1830`,
        2892: `1831`,
        2893: `1832`,
        2894: `1832`,
        2895: `1832`,
        2896: `1833`,
        2897: `1834`,
        2898: `1834`,
        2899: `1835`,
        29: `2`,
        290: `132`,
        2900: `1836`,
        2901: `1836`,
        2902: `1836`,
        2903: `1837`,
        2904: `1837`,
        2905: `1838`,
        2906: `1839`,
        2907: `1839`,
        2908: `1839`,
        2909: `1840`,
        291: `133`,
        2910: `1841`,
        2911: `1841`,
        2912: `1842`,
        2913: `1843`,
        2914: `1843`,
        2915: `1843`,
        2916: `1844`,
        2917: `1845`,
        2918: `1845`,
        2919: `1846`,
        292: `133`,
        2920: `1846`,
        2921: `1846`,
        2922: `1847`,
        2923: `1848`,
        2924: `1848`,
        2925: `1849`,
        2926: `1851`,
        2927: `1852`,
        2928: `1852`,
        2929: `1852`,
        293: `134`,
        2930: `1853`,
        2931: `1853`,
        2932: `1854`,
        2933: `1855`,
        2934: `1855`,
        2935: `1856`,
        2936: `1857`,
        2937: `1857`,
        2938: `1858`,
        2939: `1859`,
        294: `135`,
        2940: `1859`,
        2941: `1860`,
        2942: `1861`,
        2943: `1861`,
        2944: `1862`,
        2945: `1863`,
        2946: `1863`,
        2947: `1864`,
        2948: `1865`,
        2949: `1865`,
        295: `135`,
        2950: `1866`,
        2951: `1867`,
        2952: `1867`,
        2953: `1867`,
        2954: `1868`,
        2955: `1868`,
        2956: `1869`,
        2957: `1870`,
        2958: `1870`,
        2959: `1870`,
        296: `135`,
        2960: `1871`,
        2961: `1871`,
        2962: `1872`,
        2963: `1873`,
        2964: `1873`,
        2965: `1873`,
        2966: `1874`,
        2967: `1875`,
        2968: `1875`,
        2969: `1876`,
        297: `136`,
        2970: `1877`,
        2971: `1877`,
        2972: `1877`,
        2973: `1878`,
        2974: `1878`,
        2975: `1879`,
        2976: `1880`,
        2977: `1880`,
        2978: `1880`,
        2979: `1881`,
        298: `136`,
        2980: `1882`,
        2981: `1882`,
        2982: `1883`,
        2983: `1884`,
        2984: `1884`,
        2985: `1884`,
        2986: `1885`,
        2987: `1885`,
        2988: `1886`,
        2989: `1887`,
        299: `137`,
        2990: `1887`,
        2991: `1887`,
        2992: `1888`,
        2993: `1889`,
        2994: `1889`,
        2995: `1890`,
        2996: `1891`,
        2997: `1891`,
        2998: `1891`,
        2999: `1892`,
        3: `2`,
        30: `2`,
        300: `137`,
        3000: `1893`,
        3001: `1893`,
        3002: `1894`,
        3003: `1895`,
        3004: `1895`,
        3005: `1895`,
        3006: `1896`,
        3007: `1897`,
        3008: `1897`,
        3009: `1898`,
        301: `138`,
        3010: `1898`,
        3011: `1898`,
        3012: `1899`,
        3013: `1899`,
        3014: `1900`,
        3015: `1903`,
        3016: `1903`,
        3017: `1904`,
        3018: `1904`,
        3019: `1905`,
        302: `138`,
        3020: `1906`,
        3021: `1907`,
        3022: `1908`,
        3023: `1908`,
        3024: `1909`,
        3025: `1910`,
        3026: `1910`,
        3027: `1911`,
        3028: `1911`,
        3029: `1912`,
        303: `139`,
        3030: `1912`,
        3031: `1913`,
        3032: `1914`,
        3033: `1915`,
        3034: `1915`,
        3035: `1916`,
        3036: `1917`,
        3037: `1918`,
        3038: `1919`,
        3039: `1919`,
        304: `139`,
        3040: `1920`,
        3041: `1921`,
        3042: `1922`,
        3043: `1924`,
        3044: `1924`,
        3045: `1925`,
        3046: `1926`,
        3047: `1926`,
        3048: `1927`,
        3049: `1930`,
        305: `140`,
        3050: `1930`,
        3051: `1931`,
        3052: `1931`,
        3053: `1932`,
        3054: `1933`,
        3055: `1934`,
        3056: `1935`,
        3057: `1935`,
        3058: `1936`,
        3059: `1937`,
        306: `140`,
        3060: `1937`,
        3061: `1938`,
        3062: `1938`,
        3063: `1939`,
        3064: `1939`,
        3065: `1940`,
        3066: `1941`,
        3067: `1942`,
        3068: `1942`,
        3069: `1943`,
        307: `141`,
        3070: `1943`,
        3071: `1944`,
        3072: `1945`,
        3073: `1946`,
        3074: `1946`,
        3075: `1947`,
        3076: `1947`,
        3077: `1948`,
        3078: `1949`,
        3079: `1950`,
        308: `142`,
        3080: `1950`,
        3081: `1951`,
        3082: `1952`,
        3083: `1953`,
        3084: `1955`,
        3085: `1956`,
        3086: `1956`,
        3087: `1957`,
        3088: `1957`,
        3089: `1957`,
        309: `142`,
        3090: `1959`,
        3091: `1959`,
        3092: `1960`,
        3093: `1960`,
        3094: `1961`,
        3095: `1962`,
        3096: `1963`,
        3097: `1963`,
        3098: `1963`,
        3099: `1964`,
        31: `2`,
        310: `143`,
        3100: `1964`,
        3101: `1964`,
        3102: `1966`,
        3103: `1967`,
        3104: `1967`,
        3105: `1968`,
        311: `143`,
        312: `144`,
        313: `144`,
        314: `145`,
        315: `145`,
        316: `146`,
        317: `146`,
        318: `147`,
        319: `147`,
        32: `2`,
        320: `149`,
        321: `149`,
        322: `150`,
        323: `150`,
        324: `150`,
        325: `151`,
        326: `151`,
        327: `152`,
        328: `152`,
        329: `152`,
        33: `2`,
        330: `153`,
        331: `154`,
        332: `154`,
        333: `155`,
        334: `156`,
        335: `157`,
        336: `157`,
        337: `158`,
        338: `158`,
        339: `159`,
        34: `2`,
        340: `159`,
        341: `159`,
        342: `160`,
        343: `161`,
        344: `162`,
        345: `162`,
        346: `163`,
        347: `163`,
        348: `164`,
        349: `164`,
        35: `2`,
        350: `164`,
        351: `165`,
        352: `166`,
        353: `167`,
        354: `167`,
        355: `168`,
        356: `168`,
        357: `169`,
        358: `170`,
        359: `170`,
        36: `2`,
        360: `171`,
        361: `172`,
        362: `173`,
        363: `173`,
        364: `174`,
        365: `175`,
        366: `176`,
        367: `176`,
        368: `178`,
        369: `178`,
        37: `2`,
        370: `179`,
        371: `179`,
        372: `180`,
        373: `181`,
        374: `182`,
        375: `182`,
        376: `183`,
        377: `184`,
        378: `185`,
        379: `185`,
        38: `2`,
        380: `186`,
        381: `187`,
        382: `188`,
        383: `188`,
        384: `189`,
        385: `190`,
        386: `190`,
        387: `191`,
        388: `192`,
        389: `192`,
        39: `2`,
        390: `193`,
        391: `194`,
        392: `194`,
        393: `194`,
        394: `195`,
        395: `196`,
        396: `196`,
        397: `197`,
        398: `198`,
        399: `198`,
        4: `2`,
        40: `4`,
        400: `199`,
        401: `200`,
        402: `201`,
        403: `201`,
        404: `202`,
        405: `203`,
        406: `203`,
        407: `204`,
        408: `205`,
        409: `206`,
        41: `4`,
        410: `206`,
        411: `207`,
        412: `208`,
        413: `209`,
        414: `209`,
        415: `210`,
        416: `211`,
        417: `212`,
        418: `212`,
        419: `213`,
        42: `5`,
        420: `214`,
        421: `214`,
        422: `215`,
        423: `216`,
        424: `217`,
        425: `217`,
        426: `218`,
        427: `218`,
        428: `220`,
        429: `220`,
        43: `5`,
        430: `221`,
        431: `221`,
        432: `222`,
        433: `223`,
        434: `223`,
        435: `224`,
        436: `224`,
        437: `224`,
        438: `225`,
        439: `226`,
        44: `5`,
        440: `227`,
        441: `227`,
        442: `228`,
        443: `228`,
        444: `228`,
        445: `229`,
        446: `230`,
        447: `230`,
        448: `231`,
        449: `232`,
        45: `6`,
        450: `232`,
        451: `232`,
        452: `233`,
        453: `234`,
        454: `235`,
        455: `235`,
        456: `236`,
        457: `237`,
        458: `237`,
        459: `238`,
        46: `7`,
        460: `239`,
        461: `240`,
        462: `241`,
        463: `241`,
        464: `242`,
        465: `243`,
        466: `244`,
        467: `246`,
        468: `246`,
        469: `246`,
        47: `8`,
        470: `248`,
        471: `248`,
        472: `249`,
        473: `249`,
        474: `249`,
        475: `251`,
        476: `251`,
        477: `251`,
        478: `251`,
        479: `251`,
        48: `9`,
        480: `251`,
        481: `252`,
        482: `252`,
        483: `253`,
        484: `254`,
        485: `256`,
        486: `257`,
        487: `259`,
        488: `259`,
        489: `260`,
        49: `10`,
        490: `269`,
        491: `269`,
        492: `270`,
        493: `271`,
        494: `272`,
        495: `281`,
        496: `281`,
        497: `282`,
        498: `282`,
        499: `283`,
        5: `2`,
        50: `11`,
        500: `284`,
        501: `285`,
        502: `285`,
        503: `286`,
        504: `287`,
        505: `288`,
        506: `291`,
        507: `291`,
        508: `292`,
        509: `292`,
        51: `11`,
        510: `292`,
        511: `295`,
        512: `295`,
        513: `296`,
        514: `297`,
        515: `298`,
        516: `301`,
        517: `301`,
        518: `302`,
        519: `303`,
        52: `12`,
        520: `304`,
        521: `307`,
        522: `307`,
        523: `308`,
        524: `309`,
        525: `310`,
        526: `313`,
        527: `313`,
        528: `314`,
        529: `315`,
        53: `13`,
        530: `316`,
        531: `317`,
        532: `317`,
        533: `318`,
        534: `319`,
        535: `320`,
        536: `324`,
        537: `324`,
        538: `326`,
        539: `326`,
        54: `14`,
        540: `327`,
        541: `327`,
        542: `327`,
        543: `328`,
        544: `328`,
        545: `329`,
        546: `330`,
        547: `331`,
        548: `332`,
        549: `332`,
        55: `14`,
        550: `333`,
        551: `334`,
        552: `335`,
        553: `339`,
        554: `341`,
        555: `341`,
        556: `343`,
        557: `343`,
        558: `344`,
        559: `344`,
        56: `15`,
        560: `344`,
        561: `345`,
        562: `345`,
        563: `345`,
        564: `345`,
        565: `345`,
        566: `345`,
        567: `345`,
        568: `345`,
        569: `346`,
        57: `16`,
        570: `346`,
        571: `347`,
        572: `348`,
        573: `348`,
        574: `349`,
        575: `350`,
        576: `350`,
        577: `351`,
        578: `352`,
        579: `354`,
        58: `17`,
        580: `355`,
        581: `355`,
        582: `356`,
        583: `356`,
        584: `356`,
        585: `356`,
        586: `356`,
        587: `356`,
        588: `356`,
        589: `356`,
        59: `18`,
        590: `356`,
        591: `356`,
        592: `357`,
        593: `357`,
        594: `358`,
        595: `359`,
        596: `359`,
        597: `359`,
        598: `360`,
        599: `361`,
        6: `2`,
        60: `19`,
        600: `362`,
        601: `362`,
        602: `363`,
        603: `364`,
        604: `364`,
        605: `364`,
        606: `365`,
        607: `365`,
        608: `366`,
        609: `366`,
        61: `20`,
        610: `367`,
        611: `367`,
        612: `368`,
        613: `368`,
        614: `369`,
        615: `369`,
        616: `370`,
        617: `371`,
        618: `371`,
        619: `372`,
        62: `20`,
        620: `372`,
        621: `373`,
        622: `373`,
        623: `374`,
        624: `374`,
        625: `375`,
        626: `375`,
        627: `376`,
        628: `376`,
        629: `377`,
        63: `21`,
        630: `377`,
        631: `377`,
        632: `379`,
        633: `379`,
        634: `380`,
        635: `389`,
        636: `389`,
        637: `390`,
        638: `391`,
        639: `392`,
        64: `22`,
        640: `401`,
        641: `401`,
        642: `402`,
        643: `402`,
        644: `403`,
        645: `404`,
        646: `405`,
        647: `405`,
        648: `406`,
        649: `407`,
        65: `24`,
        650: `408`,
        651: `411`,
        652: `411`,
        653: `412`,
        654: `412`,
        655: `412`,
        656: `415`,
        657: `415`,
        658: `416`,
        659: `417`,
        66: `24`,
        660: `418`,
        661: `421`,
        662: `421`,
        663: `422`,
        664: `423`,
        665: `424`,
        666: `427`,
        667: `427`,
        668: `428`,
        669: `429`,
        67: `24`,
        670: `430`,
        671: `433`,
        672: `433`,
        673: `434`,
        674: `435`,
        675: `436`,
        676: `437`,
        677: `437`,
        678: `438`,
        679: `439`,
        68: `24`,
        680: `440`,
        681: `444`,
        682: `444`,
        683: `446`,
        684: `446`,
        685: `447`,
        686: `447`,
        687: `447`,
        688: `448`,
        689: `448`,
        69: `24`,
        690: `449`,
        691: `450`,
        692: `451`,
        693: `452`,
        694: `452`,
        695: `453`,
        696: `454`,
        697: `455`,
        698: `459`,
        699: `461`,
        7: `2`,
        70: `24`,
        700: `461`,
        701: `463`,
        702: `463`,
        703: `464`,
        704: `464`,
        705: `464`,
        706: `465`,
        707: `465`,
        708: `465`,
        709: `465`,
        71: `24`,
        710: `465`,
        711: `465`,
        712: `465`,
        713: `465`,
        714: `466`,
        715: `466`,
        716: `467`,
        717: `468`,
        718: `468`,
        719: `469`,
        72: `24`,
        720: `470`,
        721: `470`,
        722: `471`,
        723: `472`,
        724: `474`,
        725: `475`,
        726: `475`,
        727: `476`,
        728: `476`,
        729: `476`,
        73: `24`,
        730: `476`,
        731: `476`,
        732: `476`,
        733: `476`,
        734: `476`,
        735: `476`,
        736: `476`,
        737: `477`,
        738: `477`,
        739: `478`,
        74: `24`,
        740: `479`,
        741: `479`,
        742: `479`,
        743: `480`,
        744: `481`,
        745: `482`,
        746: `482`,
        747: `483`,
        748: `484`,
        749: `484`,
        75: `24`,
        750: `484`,
        751: `485`,
        752: `485`,
        753: `486`,
        754: `486`,
        755: `487`,
        756: `487`,
        757: `488`,
        758: `488`,
        759: `489`,
        76: `24`,
        760: `489`,
        761: `490`,
        762: `491`,
        763: `491`,
        764: `492`,
        765: `492`,
        766: `493`,
        767: `493`,
        768: `494`,
        769: `494`,
        77: `24`,
        770: `495`,
        771: `495`,
        772: `496`,
        773: `496`,
        774: `497`,
        775: `497`,
        776: `497`,
        777: `499`,
        778: `499`,
        779: `500`,
        78: `24`,
        780: `500`,
        781: `500`,
        782: `501`,
        783: `501`,
        784: `502`,
        785: `502`,
        786: `503`,
        787: `503`,
        788: `504`,
        789: `505`,
        79: `24`,
        790: `514`,
        791: `514`,
        792: `515`,
        793: `516`,
        794: `517`,
        795: `517`,
        796: `518`,
        797: `518`,
        798: `519`,
        799: `520`,
        8: `2`,
        80: `24`,
        800: `521`,
        801: `521`,
        802: `522`,
        803: `522`,
        804: `523`,
        805: `523`,
        806: `524`,
        807: `525`,
        808: `525`,
        809: `526`,
        81: `24`,
        810: `526`,
        811: `527`,
        812: `528`,
        813: `529`,
        814: `532`,
        815: `532`,
        816: `533`,
        817: `533`,
        818: `534`,
        819: `535`,
        82: `24`,
        820: `536`,
        821: `536`,
        822: `537`,
        823: `538`,
        824: `539`,
        825: `542`,
        826: `542`,
        827: `543`,
        828: `543`,
        829: `544`,
        83: `24`,
        830: `544`,
        831: `545`,
        832: `546`,
        833: `546`,
        834: `547`,
        835: `547`,
        836: `548`,
        837: `548`,
        838: `549`,
        839: `549`,
        84: `24`,
        840: `550`,
        841: `550`,
        842: `551`,
        843: `551`,
        844: `551`,
        845: `554`,
        846: `554`,
        847: `555`,
        848: `555`,
        849: `555`,
        85: `24`,
        850: `556`,
        851: `557`,
        852: `557`,
        853: `558`,
        854: `559`,
        855: `560`,
        856: `560`,
        857: `561`,
        858: `562`,
        859: `563`,
        86: `24`,
        860: `563`,
        861: `564`,
        862: `565`,
        863: `566`,
        864: `569`,
        865: `569`,
        866: `570`,
        867: `570`,
        868: `571`,
        869: `571`,
        87: `24`,
        870: `572`,
        871: `573`,
        872: `573`,
        873: `574`,
        874: `574`,
        875: `575`,
        876: `575`,
        877: `576`,
        878: `576`,
        879: `577`,
        88: `24`,
        880: `577`,
        881: `578`,
        882: `578`,
        883: `578`,
        884: `581`,
        885: `581`,
        886: `582`,
        887: `582`,
        888: `582`,
        889: `583`,
        89: `24`,
        890: `584`,
        891: `584`,
        892: `585`,
        893: `586`,
        894: `587`,
        895: `587`,
        896: `588`,
        897: `589`,
        898: `590`,
        899: `590`,
        9: `2`,
        90: `24`,
        900: `591`,
        901: `592`,
        902: `593`,
        903: `596`,
        904: `596`,
        905: `597`,
        906: `597`,
        907: `598`,
        908: `598`,
        909: `599`,
        91: `24`,
        910: `600`,
        911: `600`,
        912: `601`,
        913: `601`,
        914: `602`,
        915: `602`,
        916: `603`,
        917: `603`,
        918: `604`,
        919: `604`,
        92: `24`,
        920: `605`,
        921: `605`,
        922: `605`,
        923: `608`,
        924: `608`,
        925: `609`,
        926: `609`,
        927: `609`,
        928: `610`,
        929: `610`,
        93: `24`,
        930: `610`,
        931: `611`,
        932: `611`,
        933: `612`,
        934: `612`,
        935: `612`,
        936: `613`,
        937: `613`,
        938: `613`,
        939: `614`,
        94: `24`,
        940: `615`,
        941: `615`,
        942: `616`,
        943: `616`,
        944: `616`,
        945: `617`,
        946: `617`,
        947: `617`,
        948: `618`,
        949: `619`,
        95: `24`,
        950: `619`,
        951: `620`,
        952: `620`,
        953: `620`,
        954: `620`,
        955: `620`,
        956: `620`,
        957: `621`,
        958: `621`,
        959: `622`,
        96: `24`,
        960: `623`,
        961: `625`,
        962: `626`,
        963: `626`,
        964: `627`,
        965: `627`,
        966: `627`,
        967: `627`,
        968: `627`,
        969: `627`,
        97: `24`,
        970: `627`,
        971: `627`,
        972: `627`,
        973: `627`,
        974: `628`,
        975: `628`,
        976: `629`,
        977: `630`,
        978: `630`,
        979: `630`,
        98: `24`,
        980: `631`,
        981: `632`,
        982: `633`,
        983: `633`,
        984: `634`,
        985: `635`,
        986: `635`,
        987: `635`,
        988: `636`,
        989: `636`,
        99: `24`,
        990: `637`,
        991: `637`,
        992: `638`,
        993: `638`,
        994: `639`,
        995: `639`,
        996: `640`,
        997: `640`,
        998: `641`,
        999: `641`
    },
    appClear: `CA==`,
    appClearMap: {},
    companionInfo: null,
    extraPages: 1,
    stateKeys: 3,
    stateSize: 297,
    unsupported: [],
    version: 13,
    warnings: []
};
const _ETH = {
    ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T9","name":"v17781","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_bronze0_895","type":"bool"},{"internalType":"bool","name":"_buyer_api_gold0_895","type":"bool"},{"internalType":"bool","name":"_buyer_api_silver0_895","type":"bool"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_restock0_895","type":"tuple"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_set_prices0_895","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_895","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_895","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_895","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10163","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10794","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v11422","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v12112","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7512","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8202","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8892","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v9528","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"price_change","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes6","name":"v0","type":"bytes6"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"restock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"terminate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[3]","name":"v0","type":"uint256[3]"}],"name":"withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17784","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17787","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_bronze0_895","type":"bool"},{"internalType":"bool","name":"_buyer_api_gold0_895","type":"bool"},{"internalType":"bool","name":"_buyer_api_silver0_895","type":"bool"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_restock0_895","type":"tuple"},{"components":[{"internalType":"uint256[3]","name":"elem0","type":"uint256[3]"}],"internalType":"struct T2","name":"_controller_api_set_prices0_895","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_895","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_895","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_895","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v17790","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_bronze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_gold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_silver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"coin_prices","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coin_supply","outputs":[{"internalType":"uint256[3]","name":"","type":"uint256[3]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"v17760","type":"uint256[3]"}],"name":"controller_api_restock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256[3]","name":"v17766","type":"uint256[3]"}],"name":"controller_api_set_prices","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_terminate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_toggle_pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"is_paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
    Bytecode: `0x6080601f62004a9138819003918201601f19168301916001600160401b0383118484101762000707578084926080946040528339810103126200094b5760405190608082016001600160401b03811183821017620007075762000093916060916040528051845262000074602082016200096c565b602085015262000087604082016200096c565b6040850152016200096c565b60608201524360035560405161018081016001600160401b03811182821017620007075760009161016091604052828152826020820152826040820152826060820152604051620000e48162000950565b60603682376080820152604051620000fc8162000950565b606036823760a08201528260c08201528260e0820152826101008201528261012082015282610140820152015260405160e0810181811060018060401b0382111762000707576040526200014f62000981565b81526200015b620009a2565b60208201526200016a620009a2565b604082015262000179620009a2565b606082015260006080820152600060a0820152600060c082015260ff6004541662000932577f445f7d1d3c7ecf7a61d6d64c4194290a54beada7275d0418d50b9c355c8b665360a060405133815284516020820152600180831b036020860151166040820152600180831b036040860151166060820152600180831b036060860151166080820152a18151801590811562000925575b50156200090c57600081515260006020825101526000604082510152805160208201515280516020808301510152805160406020830151015260208101518051604060208201519101511515604051916200026a8362000950565b600083526020830152604082015262000282620009a2565b9160005b60038110620008d25750508152806040830152602081015160406020820151910151151560405191620002b98362000950565b6000835260208301526040820152620002d1620009a2565b9160005b60038110620008985750506020820152606082015260018060a01b0360408301511660018060a01b0360208401511614600014620008905760005b15620008775760608201805160208401516001600160a01b0391821690821614608084018190529151604085015182169116036200086f5760005b1515908160a084015260001462000869575060005b1562000850573462000837573360c0820152602082015160408301516001600160a01b039081169116036200082f5760005b156200081657602082015160608301516001600160a01b039081169116036200080e5760005b15620007f557604082015160608301516001600160a01b03908116911603620007ed5760005b15620007d457608081015115620007cc5760005b15620007b35760a0810151156200079a57604051916001600160401b0360c0840190811190841117620007075760c083016040526000835260006020840152600060408401526000606084015262000449620009a2565b6080840152600060a08401523383526020818101516001600160a01b0390811682860152604080840151821681870152606093840151909116838601529183015180830151918201519183015192519092909190151590620004ab8362000950565b6000835260208301526040820152620004c3620009a2565b9160005b600381106200074a5750506040820152608083015260c060018060a01b039101511660a08201526001600055436001556040519060018060a01b03815116602083015260018060a01b03602082015116604083015260018060a01b03604082015116606083015260018060a01b036060820151166080830152608081015160a083016000905b600382106200071d5750505060a001516001600160a01b03166101c08281019190915281526101e081016001600160401b03811182821017620007075760405280516001600160401b0381116200070757600254600181811c91168015620006fc575b6020821014620006e657601f81116200067c575b50602091601f8211600114620006125791819260009262000606575b50508160011b916000199060031b1c1916176002555b60405161408e908162000a038239f35b015190503880620005e0565b601f19821692600260005260206000209160005b858110620006635750836001951062000649575b505050811b01600255620005f6565b015160001960f88460031b161c191690553880806200063a565b9192602060018192868501518155019401920162000626565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620006db575b601f0160051c01905b818110620006ce5750620005c4565b60008155600101620006bf565b9091508190620006b6565b634e487b7160e01b600052602260045260246000fd5b90607f1690620005b0565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200054d565b620007568183620009da565b51620007638286620009da565b52620007708185620009da565b5060001981146200078457600101620004c7565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b6001620003f2565b60405163100960cb60e01b815260146004820152602490fd5b6001620003de565b60405163100960cb60e01b815260136004820152602490fd5b6001620003b8565b60405163100960cb60e01b815260126004820152602490fd5b600162000392565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b62000360565b60016200034b565b60405163100960cb60e01b8152600f6004820152602490fd5b600162000310565b620008a48183620009da565b51620008b18286620009da565b52620008be8185620009da565b5060001981146200078457600101620002d5565b620008de8183620009da565b51620008eb8286620009da565b52620008f88185620009da565b506000198114620007845760010162000286565b60405163100960cb60e01b8152600e6004820152602490fd5b905060015414386200020f565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b606081019081106001600160401b038211176200070757604052565b51906001600160a01b03821682036200094b57565b60405190620009908262000950565b60006040838281528260208201520152565b60405190620009b18262000950565b8160005b60608110620009c2575050565b602090620009cf62000981565b8184015201620009b5565b906003811015620009ec5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461016c57806341712c0a14610163578063573b85101461015a57806358d058cf1461015157806378d83cd9146101485780638039fb9f1461013f578063832307571461013657806388e5518f1461012d5780638c3004551461012457806395e549c61461011b5780639d4f8aa914610112578063ab53f2c614610109578063abc8014a14610100578063c2e3cb94146100f7578063e091078a146100ee578063e30a7e8f146100e55763ec8fb8110361000e576100e0610a91565b61000e565b506100e0610a59565b506100e06109eb565b506100e06109ab565b506100e061096b565b506100e06108f6565b506100e061085c565b506100e0610812565b506100e061074c565b506100e06106d2565b506100e06106b3565b506100e0610672565b506100e0610634565b506100e06105db565b506100e0610423565b506100e06101a1565b503461018b57600036600319011261018b576020600354604051908152f35b600080fd5b602090600319011261018b57600490565b506101be6101ae36610190565b6101b6610dc1565b503690610e51565b6101c66121b4565b6103c86000916101d9600384541461115f565b6101e1610c75565b6101f560209182808251830101910161221f565b9161021161020c61020860045460ff1690565b1590565b61117f565b61025a6040967fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e8515885180610246843383611035565b0390a1518015908115610417575b5061119f565b61026434156111bf565b6103a2608084019260018060a01b039233846102808751610ead565b16036104005761029060016111df565b878080806102a66102a18a51610ead565b610ead565b6101008b0151908282156103f7575bf1156103ea575b87815261039d6103048960e08901516102ff8d6101208c0151906102e6818a840151930151151590565b916102ef610d20565b9586528986015284019015159052565b612508565b838301908152610333610319858a0151610ead565b6103238951610ead565b90886101408c0151921690612405565b610374610341825160200190565b51518c6101608b019182519003950194855261035f8d8b0151610ead565b8861036a8b51610ead565b9251921690612405565b51915192808301518b8282015191015115159161038f610d20565b95865285015215158a840152565b61256c565b506101806103bd6103b66060860151610ead565b9351610ead565b930151921690612405565b80556103d46000600155565b6103dc612320565b5160008152602090f35b0390f35b6103f2612313565b6102bc565b506108fc6102b5565b610290336104116102a18951610ead565b146111df565b90506001541438610254565b506105c36104336101ae36610190565b608061043d610e6f565b9161044c6001600054146111ff565b6104c561046961045a610c75565b60208082518301019101610f8c565b9161048161047c61020860045460ff1690565b61121f565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806104b1843383611035565b0390a15180159081156105cf575b5061123f565b6104cf341561125f565b6104eb3360018060a01b036104e48451610ead565b161461127f565b629896808351526301312d00610502845160200190565b526301c9c380610513845160400190565b5261051c6110c7565b9261053061052a8351610ead565b85611150565b6105496105406020840151610ead565b60208601611150565b6105626105596040840151610ead565b60408601611150565b61057b6105726060840151610ead565b60608601611150565b61059361058b60a0840151610ead565b848601611150565b5160a0840152600060c0840152600060e08401524361010084015201516101208201526000610140820152611e9b565b60405160008152602090f35b905060015414386104bf565b50600036600319011261018b57602060606105f4610dc1565b61062881610600614003565b8581019060028251525115158582510152610619614003565b90600082525186820152612b22565b01511515604051908152f35b50600036600319011261018b576020604061064d610dc1565b61062881610659614003565b8581019060018251525115158582510152610619614003565b50600036600319011261018b57602061014061068c610dc1565b61062881610698614003565b85810190600782515251151561010082510152610619614003565b503461018b57600036600319011261018b576020600154604051908152f35b50600036600319011261018b576020806106ea610dc1565b610628816106f6614003565b848101906000825152511515858251015261070f614003565b90600082525185820152612b22565b6060810192916000915b6003831061073557505050565b600190825181526020809101920192019190610728565b503461018b57600036600319011261018b57606060405161076c81610be5565b3690376103e660a061077c610dc1565b60005460058110156107c657600361079491146112bf565b6101a06107b16107a2610c75565b6020808251830101910161221f565b0151828201525b01516040519182918261071e565b60056107d2911461129f565b6102206107ef6107e0610c75565b602080825183010191016128b2565b0151828201526107b8565b606060031982011261018b5760641161018b57600490565b50602060e0610838610628610826366107fa565b61082e610dc1565b92839136906126c5565b61084061401f565b908151528581019060048251525160a082510152610619614003565b503461018b57600036600319011261018b576103e66108b961016061087f610dc1565b60005460058110156108cb57600361089791146112ff565b6108aa6108b160c06108aa6107a2610c75565b0151151590565b151582840152565b60405190151581529081906020820190565b60056108d791146112df565b6108f160c06108e76107e0610c75565b0151151582840152565b6108aa565b503461018b57600080600319360112610968578054610913610c75565b906040519283918252602090604082840152835191826040850152815b83811061095157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610930565b80fd5b50600036600319011261018b576020610100610985610dc1565b61062881610991614003565b85810190600582515251151560c082510152610619614003565b50600036600319011261018b5760206101206109c5610dc1565b610628816109d1614003565b85810190600682515251151560e082510152610619614003565b503461018b57600036600319011261018b576060604051610a0b81610be5565b3690376103e66080610a1b610dc1565b6000546005811015610a40576003610a33911461133f565b60a06107b16107a2610c75565b6005610a4c911461131f565b60a06107ef6107e0610c75565b50602060c0610a6d610628610826366107fa565b610a7561401f565b9081515285810190600382515251608082510152610619614003565b506101c036600319011261018b57610aa7610dc1565b60405190610ab482610ba2565b60043582526101a036602319011261018b576105c391610ad2610d2d565b610ada612665565b8152610ae4612674565b6020820152610af1612681565b6040820152610afe61268e565b6060820152610b0c366126ff565b6080820152610b1a3661275c565b60a0820152610b2761269b565b60c0820152610b346126a9565b60e0820152610b416126b7565b6101008201526020820152612b22565b90600182811c92168015610b81575b6020831014610b6b57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b60565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610bbd57604052565b610bc5610b8b565b604052565b602081019081106001600160401b03821117610bbd57604052565b606081019081106001600160401b03821117610bbd57604052565b6101c081019081106001600160401b03821117610bbd57604052565b608081019081106001600160401b03821117610bbd57604052565b60a081019081106001600160401b03821117610bbd57604052565b601f909101601f19168101906001600160401b03821190821017610bbd57604052565b6040519060008260025491610c8983610b51565b808352600193808516908115610cff5750600114610cb1575b50610caf92500383610c52565b565b6002600090815260008051602061404283398151915294602093509091905b818310610ce7575050610caf935082010138610ca2565b85548884018501529485019487945091830191610cd0565b9050610caf94506020925060ff191682840152151560051b82010138610ca2565b60405190610caf82610be5565b6040519061012082016001600160401b03811183821017610bbd57604052565b604051906102a082016001600160401b03811183821017610bbd57604052565b604051906101c082016001600160401b03811183821017610bbd57604052565b6040519061036082016001600160401b03811183821017610bbd57604052565b60405190610dba82610be5565b6060368337565b6040519061018082016001600160401b03811183821017610e44575b60405281610160600091828152826020820152826040820152826060820152604051610e0881610be5565b60603682376080820152610e1a610dad565b60a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b610e4c610b8b565b610ddd565b919082602091031261018b57604051610e6981610bca565b91358252565b60405190602082016001600160401b03811183821017610ea0575b8060405282610e9882610be5565b606036833752565b610ea8610b8b565b610e8a565b6001600160a01b031690565b51906001600160a01b038216820361018b57565b8015150361018b57565b5190610caf82610ecd565b919082606091031261018b57604051606081016001600160401b03811182821017610f2e575b60405260408082948051845260208101516020850152015191610f2a83610ecd565b0152565b610f36610b8b565b610f08565b81601f8201121561018b5760405191610f5383610be5565b829061012083019281841161018b57915b838310610f72575050505090565b6020606091610f818486610ee2565b815201920191610f64565b6101c08183031261018b5760405191611013916101a0916110089060c086016001600160401b0381118782101761101b575b604052610fca83610eb9565b8652610fd860208401610eb9565b6020870152610fe960408401610eb9565b6040870152610ffa60608401610eb9565b606087015260808301610f3b565b608085015201610eb9565b60a082015290565b611023610b8b565b610fbe565b6001600160a01b03169052565b6001600160a01b0390911681529051602082015260400190565b9060038110156110605760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519061108382610be5565b60006040838281528260208201520152565b604051906110a282610be5565b8160005b606081106110b2575050565b6020906110bd611076565b81840152016110a6565b6040519061016082016001600160401b03811183821017611143575b6040528161014060009182815282602082015282604082015282606082015282608082015260405161111481610be5565b606036823760a08201528260c08201528260e082015282610100820152611139611095565b6101208201520152565b61114b610b8b565b6110e3565b6001600160a01b039091169052565b1561116657565b60405163100960cb60e01b8152601c6004820152602490fd5b1561118657565b60405163100960cb60e01b8152601d6004820152602490fd5b156111a657565b60405163100960cb60e01b8152601e6004820152602490fd5b156111c657565b60405163100960cb60e01b8152601f6004820152602490fd5b156111e657565b60405163100960cb60e01b815260206004820152602490fd5b1561120657565b60405163100960cb60e01b815260176004820152602490fd5b1561122657565b60405163100960cb60e01b815260186004820152602490fd5b1561124657565b60405163100960cb60e01b815260196004820152602490fd5b1561126657565b60405163100960cb60e01b8152601a6004820152602490fd5b1561128657565b60405163100960cb60e01b8152601b6004820152602490fd5b156112a657565b60405163100960cb60e01b8152600a6004820152602490fd5b156112c657565b60405163100960cb60e01b815260096004820152602490fd5b156112e657565b60405163100960cb60e01b8152600c6004820152602490fd5b1561130657565b60405163100960cb60e01b8152600b6004820152602490fd5b1561132657565b60405163100960cb60e01b815260086004820152602490fd5b1561134657565b60405163100960cb60e01b815260076004820152602490fd5b1561136657565b60405163100960cb60e01b815260256004820152602490fd5b1561138657565b60405163100960cb60e01b815260266004820152602490fd5b156113a657565b60405163100960cb60e01b815260276004820152602490fd5b156113c657565b60405163100960cb60e01b815260706004820152602490fd5b156113e657565b60405163100960cb60e01b815260726004820152602490fd5b1561140657565b60405163100960cb60e01b815260746004820152602490fd5b1561142657565b60405163100960cb60e01b815260766004820152602490fd5b1561144657565b60405163100960cb60e01b815260786004820152602490fd5b1561146657565b60405163100960cb60e01b815260676004820152602490fd5b1561148657565b60405163100960cb60e01b815260696004820152602490fd5b156114a657565b60405163100960cb60e01b8152606b6004820152602490fd5b156114c657565b60405163100960cb60e01b8152606d6004820152602490fd5b156114e657565b60405163100960cb60e01b8152606f6004820152602490fd5b1561150657565b60405163100960cb60e01b8152605e6004820152602490fd5b1561152657565b60405163100960cb60e01b815260606004820152602490fd5b1561154657565b60405163100960cb60e01b815260626004820152602490fd5b1561156657565b60405163100960cb60e01b815260646004820152602490fd5b1561158657565b60405163100960cb60e01b815260666004820152602490fd5b156115a657565b60405163100960cb60e01b815260556004820152602490fd5b156115c657565b60405163100960cb60e01b815260576004820152602490fd5b156115e657565b60405163100960cb60e01b815260596004820152602490fd5b1561160657565b60405163100960cb60e01b8152605b6004820152602490fd5b1561162657565b60405163100960cb60e01b8152605d6004820152602490fd5b1561164657565b60405163100960cb60e01b8152604c6004820152602490fd5b1561166657565b60405163100960cb60e01b8152604e6004820152602490fd5b1561168657565b60405163100960cb60e01b815260506004820152602490fd5b156116a657565b60405163100960cb60e01b815260526004820152602490fd5b156116c657565b60405163100960cb60e01b815260546004820152602490fd5b156116e657565b602460405163100960cb60e01b815260406004820152fd5b1561170557565b60405163100960cb60e01b815260416004820152602490fd5b1561172557565b60405163100960cb60e01b815260436004820152602490fd5b1561174557565b60405163100960cb60e01b815260456004820152602490fd5b1561176557565b60405163100960cb60e01b815260476004820152602490fd5b1561178557565b60405163100960cb60e01b815260496004820152602490fd5b156117a557565b60405163100960cb60e01b815260346004820152602490fd5b156117c557565b60405163100960cb60e01b815260356004820152602490fd5b156117e557565b60405163100960cb60e01b815260376004820152602490fd5b1561180557565b60405163100960cb60e01b815260396004820152602490fd5b1561182557565b60405163100960cb60e01b8152603b6004820152602490fd5b1561184557565b60405163100960cb60e01b8152603d6004820152602490fd5b1561186557565b60405163100960cb60e01b815260286004820152602490fd5b1561188557565b60405163100960cb60e01b815260296004820152602490fd5b156118a557565b60405163100960cb60e01b8152602b6004820152602490fd5b156118c557565b60405163100960cb60e01b8152602d6004820152602490fd5b156118e557565b60405163100960cb60e01b8152602f6004820152602490fd5b1561190557565b60405163100960cb60e01b815260316004820152602490fd5b6040519061192b82610ba2565b8160405161193881610be5565b6060368237815260206040519161194e83610be5565b60603684370152565b61195f610d4d565b906000808352806020840152806040840152806060840152806080840152611985610dad565b60a08401528060c08401528060e084015261199e611095565b61010084015280610120840152806101408401526119ba611076565b610160840152806101808401526119cf611076565b6101a0840152806101c08401526119e4611076565b6101e0840152806102008401526119f9610dad565b6102208401528061024084015280610260840152610280830152565b6000915b60038310611a2657505050565b600190825181526020809101920192019190611a19565b60408091805184526020810151602085015201511515910152565b906000905b60038210611a6a57505050565b6020606082611a7c6001948751611a3d565b01930191019091611a5d565b9190916104c06104e0820193611a9f838251611028565b611ab160208201516020850190611028565b611ac360408201516040850190611028565b611ad560608201516060850190611028565b611ae760808201516080850190611028565b611af960a082015160a0850190611a15565b60c081015190611b10610100928386019015159052565b60e081015191611b27610120938487019015159052565b81015191611b3b6101409384870190611a58565b81015191610260928386015281015191611b5c610280938487019015159052565b611b706101608301516102a0870190611a3d565b610180820151610300860152611b906101a0830151610320870190611a3d565b6101c0820151610380860152611bb06101e08301516103a0870190611a3d565b610200820151610400860152611bd0610220830151610420870190611a15565b6102408201516104808601528101516104a08501520151910152565b818110611bf7575050565b60008155600101611bec565b90601f8211611c10575050565b610caf9160026000526020600020906020601f840160051c83019310611c3e575b601f0160051c0190611bec565b9091508190611c31565b80519091906001600160401b038111611d1e575b611c7081611c6b600254610b51565b611c03565b602080601f8311600114611cac5750819293600092611ca1575b50508160011b916000199060031b1c191617600255565b015190503880611c8a565b6002600052601f19831694909190600080516020614042833981519152926000905b878210611d06575050836001959610611ced575b505050811b01600255565b015160001960f88460031b161c19169055388080611ce2565b80600185968294968601518155019501930190611cce565b611d26610b8b565b611c5c565b60405190611d3882610c00565b816000808252806020830152806040830152806060830152806080830152611d5e610dad565b60a08301528060c0830152611d71611095565b60e083015280610100830152611d85611076565b61012083015280610140830152806101608301526101808201526101a0611daa610dad565b910152565b610caf909291926103206101a0610380830195611dcd848251611028565b611ddf60208201516020860190611028565b611df160408201516040860190611028565b611e0360608201516060860190611028565b611e1560808201516080860190611028565b611e2760a082015160a0860190611a15565b611e6d60c0820151611e40610100918288019015159052565b60e083015190611e566101209283890190611a58565b830151610240870152820151610260860190611a3d565b6101408101516102c08501526101608101516102e08501526101808101516103008501520151910190611a15565b611ea361191e565b60e08201511561200d57612008610caf92611ffa92611fc96101209283810190602082515151940193845152611eda825160200190565b515184516020015281516040015151845160400152611ef7611d2b565b94611f0b611f058351610ead565b87611150565b611f24611f1b6020840151610ead565b60208801611150565b611f3d611f346040840151610ead565b60408801611150565b611f56611f4d6060840151610ead565b60608801611150565b611f6f611f666080840151610ead565b60808801611150565b60a082015160a0870152611f92611f8960c0840151151590565b151560c0880152565b825160e087015261014091820151610100870152825151908601528151515190850152805160200151516101608501525160400190565b5151610180830152516101a0820152611fe26003600055565b611feb43600155565b60405192839160208301611daf565b03601f198101835282610c52565b611c48565b612008610caf9261218b611ffa936101209061216082850180515151835152612037815160200190565b515183516020015280516040015151835160400152612121612057611957565b9661206b6120658251610ead565b89611150565b61208461207b6020830151610ead565b60208a01611150565b61209d6120946040830151610ead565b60408a01611150565b6120b66120ad6060830151610ead565b60608a01611150565b6120cf6120c66080830151610ead565b60808a01611150565b61211960a0820196875160a08b015260c08301906120f96120f08351151590565b151560c08d0152565b600060e08c015285516101008c015261014080940151908b015251151590565b151590880152565b805151610160870152805151516101808701528051602001516101a0870152805160200151516101c08701528051604001516101e08701525160400190565b5151610200850152516102208401528051516102408401528051602001516102608401525160400190565b5161028082015261219c6005600055565b6121a543600155565b60405192839160208301611a88565b604051906121c182610be5565b60006040838281526121d1611095565b60208201520152565b9080601f8301121561018b57604051916121f383610be5565b82906060810192831161018b57905b82821061220f5750505090565b8151815260209182019101612202565b906103808282031261018b5761230a9061032061223a610d6d565b9361224481610eb9565b855261225260208201610eb9565b602086015261226360408201610eb9565b604086015261227460608201610eb9565b606086015261228560808201610eb9565b60808601526122978360a083016121da565b60a08601526101006122aa818301610ed7565b60c0870152610120906122bf85838501610f3b565b60e0880152610240830151908701526122dc846102608401610ee2565b908601526102c08101516101408601526102e0810151610160860152610300810151610180860152016121da565b6101a082015290565b506040513d6000823e3d90fd5b61232b600254610b51565b806123335750565b601f811160011461234657506000600255565b600260005261238b90601f0160051c600080516020614042833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611bec565b6000602081208160025555565b600080916123fe938260405191602083019263a9059cbb60e01b845260018060a01b03809216602482015260016044820152604481526123d781610c1c565b5193165af16123ee6123e7612443565b80926124a8565b5060208082518301019101612490565b1561018b57565b600091906123fe93838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526123d781610c1c565b3d1561248b573d906001600160401b03821161247e575b60405191612472601f8201601f191660200184610c52565b82523d6000602084013e565b612486610b8b565b61245a565b606090565b9081602091031261018b57516124a581610ecd565b90565b156124b05790565b8051156124bf57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156124e05790565b8051156124ef57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b9190612512611095565b926000805b60038110612526575050508252565b612530818461104f565b5161253b828861104f565b52612546818761104f565b50600019811461255857600101612517565b634e487b7160e01b82526011600452602482fd5b9190612576611095565b926000805b6003811061258d575050506020830152565b612597818461104f565b516125a2828861104f565b526125ad818761104f565b5060001981146125585760010161257b565b91906125c9611095565b926000805b600381106125e0575050506020830152565b6125ea818461104f565b516125f5828861104f565b52612600818761104f565b506000198114612558576001016125ce565b919061261c611095565b926000805b60038110612633575050506040830152565b61263d818461104f565b51612648828861104f565b52612653818761104f565b50600019811461255857600101612621565b60243590600882101561018b57565b60443590610caf82610ecd565b60643590610caf82610ecd565b60843590610caf82610ecd565b6101643590610caf82610ecd565b6101843590610caf82610ecd565b6101a43590610caf82610ecd565b9190604051926126d484610be5565b83906060810192831161018b57905b8282106126ef57505050565b81358152602091820191016126e3565b90606060a31983011261018b576040519161271983610bca565b828160c3121561018b576040519161273083610be5565b8261010491821161018b5760a4905b82821061274c5750505052565b813581526020918201910161273f565b9060606101031983011261018b576040519161277783610bca565b8281610123121561018b576040519161278f83610be5565b8261016491821161018b57610104905b8282106127ac5750505052565b813581526020918201910161279f565b6127c4610d8d565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152612818610e6f565b610180840152806101a084015261282d611095565b6101c0840152806101e0840152612842611095565b61020084015280610220840152612857611095565b610240840152612865610dad565b610260840152612873610e6f565b610280840152806102a0840152806102c084015261288f611095565b6102e0840152806103008401526128a4611095565b610320840152610340830152565b906104e08282031261018b576104c06128c9610d4d565b926128d381610eb9565b84526128e160208201610eb9565b60208501526128f260408201610eb9565b604085015261290360608201610eb9565b606085015261291460808201610eb9565b60808501526129268360a083016121da565b60a08501526101009261293a848301610ed7565b60c08601526129f361012091612951838501610ed7565b60e08801526101409561296682888701610f3b565b9088015261026092838501519088015261028095612985878601610ed7565b90880152612997816102a08601610ee2565b6101608801526103008401516101808801526129b7816103208601610ee2565b6101a08801526103808401516101c08801526129d7816103a08601610ee2565b6101e088015261040084015161020088015261042084016121da565b6102208601526104808201516102408601526104a08201519085015201519082015290565b60081115612a2257565b634e487b7160e01b600052602160045260246000fd5b90610caf9151611a15565b9092916020906101e083019460018060a01b031683528051828401520151908151916008831015612a22576101006101c091610caf946040850152612a916020820151606086019015159052565b6040810151151560808501526060810151151560a0850152612abb608082015160c0860190612a38565b612ace60a0820151610120860190612a38565b60c0810151151561018085015260e081015115156101a085015201511515910152565b516008811015612a225790565b6001600160d01b031990911681526001600160a01b03909116602082015260400190565b612b2a6127bc565b906000612b3a600582541461135f565b612b42610c75565b92612b576020948580825183010191016128b2565b612b6e612b6961020860045460ff1690565b61137f565b846040947fbc261dc0b9d5223a35f41d8286b61aadce0823f37befb9919e54d2f33d75be49865180612ba1843383612a43565b0390a1612bb981518015908115613ee7575b5061139f565b01612bc48151612af1565b612bcd81612a18565b612e3c575061014094612bea612be587840151151590565b61185e565b610180820194612bfe60018751101561187e565b61012094612c1c86850151610240860190815101875251341461189e565b82840198612c3b612c36612c308c51610ead565b33613ef3565b6118be565b828501612c53612c4e612c308351610ead565b6118de565b846060870192612c6e612c69612c308651610ead565b6118fe565b8189019a858c5260808901958080808d612c8b6102a18c51610ead565b905190828215612e33575bf115612e26575b60001990510198868101998a528d339051612cb790610ead565b90612cc191612398565b606001612cd6816562726f6e7a6560d01b9052565b516001600160d01b0319168651809133612cf09183612afe565b0360008051602061406283398151915291a18551600181527f301d56bc78b26f10fcbc84bb1befff858123c7e601ca3e5a49c3960d47741c4490602090a16001910152612d3b6110c7565b9a8651612d4790610ead565b612d51908d611150565b51612d5b90610ead565b612d67908c8701611150565b51612d7190610ead565b612d7d908b8501611150565b51612d8790610ead565b612d949060608b01611150565b51612d9e90610ead565b612dab9060808a01611150565b60a0838101519089015260c08301511515151560c089015260e08301511515151560e089015261010043818a015283015193519261016001518183820151910151612df590151590565b92612dfe610d20565b94855284015290151590820152612e1491612508565b908401525190820152610caf90611e9b565b612e2e612313565b612c9d565b506108fc612c96565b6001612e4b8296959651612af1565b612e5481612a18565b036130b2575061014094612e72612e6d87840151151590565b61179e565b610200820193612e866001865110156117be565b610120948584015190612eab61028086019283510192608088019384525134146117de565b83850199612ec4612ebf612c308d51610ead565b6117fe565b8380870191612ede612ed9612c308551610ead565b61181e565b6060880193612ef8612ef3612c308751610ead565b61183e565b60a08a019b808d5280808060808d0199612f156102a18c51610ead565b9051908282156130a9575bf11561309c575b6000199051019860c08101998a52338551612f4190610ead565b90612f4b91612398565b60e001612f5e816319dbdb1960e21b9052565b516001600160d01b0319168251809133612f789183612afe565b0360008051602061406283398151915291a18151600181527f8875a227db24b95f6138d3a9c8e1f0db882e8cc37c9cbfbc0e99c0dcbc136cfe90602090a16001910152612fc36110c7565b9a8651612fcf90610ead565b612fd9908d611150565b51612fe390610ead565b612fef908c8701611150565b51612ff990610ead565b613005908b8501611150565b5161300f90610ead565b61301c9060608b01611150565b5161302690610ead565b6130339060808a01611150565b60a0838101519089015260c08301511515151560c089015260e08301511515151560e089015261010043818a01528301519351926101e00151818382015191015161307d90151590565b92613086610d20565b94855284015290151590820152612e1491612612565b6130a4612313565b612f27565b506108fc612f20565b60026130c2829895979851612af1565b6130cb81612a18565b036133275750612c3095610140956130ed6130e888850151151590565b6116df565b6101c083016131006001825110156116fe565b6101209586850151916102608601928351019161312861010094858a0194855251341461171e565b61313e6131398789019d8e51610ead565b61173e565b84870190613157613152612c308451610ead565b61175e565b606088019261317161316c612c308651610ead565b61177e565b8a8a019b808d5280808060808d019861318d6102a18b51610ead565b90519082821561331e575bf115613311575b600019905101988c8101998a523383516131b890610ead565b906131c291612398565b610160016131d8816539b4b63b32b960d11b9052565b516001600160d01b03191686518091336131f29183612afe565b0360008051602061406283398151915291a18551600181527fccd953e59de64731106caf9112ab0a245476ccd1abc6b3b06f6430c06321732190602090a160600161323d9060019052565b6132456110c7565b9b8c885161325290610ead565b61325b91611150565b5161326590610ead565b613271908d8801611150565b5161327b90610ead565b613287908c8601611150565b5161329190610ead565b61329e9060608c01611150565b516132a890610ead565b6132b59060808b01611150565b60a084810151908a015260c0808501511515908a015260e0808501511515908a015243818a015283015193516101a09093015182810151908201511515926132fb610d20565b94855284015290151590820152612e14916125bf565b613319612313565b61319f565b506108fc613198565b9094919360036133378351612af1565b61334081612a18565b0361363a57505160800151610180918285019182526080860192835161336590610ead565b61336e90610ead565b33146133799061163f565b613383341561165f565b860151825151510193846101a0870152610100948588015190610160890151848b8201519101516133b390151590565b906133bc610d20565b9283528b8301521515848201526133d291612508565b976101c087019889528088019889516133ea90610ead565b855151516133f89133613f4e565b6134019061167f565b51818101805151865151602001510190816101e08b015251858482015191015115159061342c610d20565b92835284830152151585820152613442916125bf565b91610200880192835283890192835161345a90610ead565b8651516020015161346b9133613f4e565b6134749061169f565b51848101805151875151604001510190816102208c015251868582015191015115159061349f610d20565b928352858301521515868201526134b591612612565b97610240810198895260608a019586516134ce90610ead565b905151604001516134df9133613f4e565b6134e8906116bf565b8851515190610260019081515288516135019060200190565b51518151602001528851604001515181516040015251845161352481928261071e565b037fb8a96d26a4213e516748843376cec5f4df7afc98082efc0fec9d7c25d87c83d791a18351600181527f89f12b6bfbe6fdeb5a1d28a57351bc7d85129f833d67beb6360c71ff37db2b3a90602090a160c0016135819060019052565b6135896110c7565b98885161359590610ead565b61359f908b611150565b516135a990610ead565b6135b4918a01611150565b516135be90610ead565b6135c9918801611150565b516135d390610ead565b6135e09060608701611150565b516135ea90610ead565b6135f79060808601611150565b60a0838101519085015260c08084015115159085015260e080840151151590850152439084015251610120808401919091520151610140820152610caf90611e9b565b60046136498395949551612af1565b61365281612a18565b0361382557505160a0015192610280019283526080840191825161367590610ead565b61367e90610ead565b33146136899061159f565b61369334156115bf565b8585019586516136a290610ead565b6136ac9033613ef3565b6136b5906115df565b8186019081516136c490610ead565b6136ce9033613ef3565b6136d7906115ff565b606087019384516136e790610ead565b6136f19033613ef3565b6136fa9061161f565b865151845161370a81928261071e565b037fb235896a047b6551255fee8fc368ece195980b9dd364fadc7f3213480ebf236b91a18351600181527fa5750c9bb6d94eb56d0659e8fc228c720471224f94ed2afafa07029429200f9790602090a160e0016137679060019052565b61376f6110c7565b97875161377b90610ead565b613785908a611150565b5161378f90610ead565b61379a918901611150565b516137a490610ead565b6137af918701611150565b516137b990610ead565b6137c69060608601611150565b516137d090610ead565b6137dd9060808501611150565b515160a083015260c08101511515151560c083015260e08101511515151560e083015261010043818401528101519061012091828401520151610140820152610caf90611e9b565b9060056138388298959896949651612af1565b61384181612a18565b036139f5575050506080830190815161385990610ead565b61386290610ead565b331461386d906114ff565b613877341561151f565b80840194855161388690610ead565b6138909033613ef3565b6138999061153f565b80850180516138a790610ead565b6138b19033613ef3565b6138ba9061155f565b606086019283516138ca90610ead565b6138d49033613ef3565b6138dd9061157f565b8251600181527f8af42bd28821e762acc84f5b0c59d0453b2f4b842220b030e985c6ddef04ecb590602090a18251600181527f91ee8965f932315950ca725b00f31b972b0957309071259743969b617940d8c590602090a16001610100968701526139466110c7565b97875161395290610ead565b61395c908a611150565b5161396690610ead565b613971918901611150565b5161397b90610ead565b613986918701611150565b5161399090610ead565b61399d9060608601611150565b516139a790610ead565b6139b49060808501611150565b60a0828101519084015260c08201511515151560c0840152600160e084015243818401528101519061012091828401520151610140820152610caf90611e9b565b6006613a08829894959897969751612af1565b613a1181612a18565b03613b9c57506080840191613a33613a2c6102a18551610ead565b331461145f565b613a3d341561147f565b86850196613a56613a51612c308a51610ead565b61149f565b81860190613a6f613a6a612c308451610ead565b6114bf565b6060870193613a89613a84612c308751610ead565b6114df565b60c088015115613b90576102a090965b96151596018681528351968752957fffd74d84afbe7acedbef588e8ba566f9fccc29e1283de4b53de29003d0677fbc90602090a18551151561012098890152613ae06110c7565b988751613aec90610ead565b613af6908b611150565b51613b0090610ead565b613b0b918a01611150565b51613b1590610ead565b613b20918801611150565b51613b2a90610ead565b613b379060608701611150565b51613b4190610ead565b613b4e9060808601611150565b60a08281015190850152511515151560c084015260e08101511515151560e08401526101004381850152810151828401520151610140820152610caf90611e9b565b506102a0600196613a99565b613bab60079197929751612af1565b613bb481612a18565b14613bc2575b505050505050565b608084018051613bd190610ead565b613bda90610ead565b3314613be5906113bf565b613bef34156113df565b818501968751613bfe90610ead565b613c089033613ef3565b613c11906113ff565b6101c08601918487018051613c2590610ead565b613c2f9033613ef3565b613c389061141f565b61020088019060608901918251613c4e90610ead565b613c589033613ef3565b613c619061143f565b846102c08a015261010094858b0151906101608c01518a8a820151910151613c8890151590565b90613c91610d20565b9283528a83015215158a820152613ca791612508565b906102e08a019182528c51613cbb90610ead565b918551613cc790610ead565b6101808d01516001600160a01b0394613ce292861690612405565b518a8982018051518a51900361030081930152518b8b820151910151151590613d09610d20565b9283528b83015215158b820152613d1f916125bf565b966103208b019788528351613d3390610ead565b90838751613d4090610ead565b91519116613d4d92612405565b86516040015151815190039961034001998a528351613d6b90610ead565b918551613d7790610ead565b91519116613d8492612405565b6102208901518751613d9781928261071e565b037fb1b8f1be6db5b05302e62b23bcf87ff659e3737b9e45384be6ee3b228350636291a18651600181527f2130f8588686165954e8d66aed917a4b3563ae4fd11e2cc79090e2880292525d90602090a160016101409a8b0152613df86110c7565b9a8951613e0490610ead565b613e0e908d611150565b51613e1890610ead565b613e24908c8801611150565b51613e2e90610ead565b613e3a908b8801611150565b51613e4490610ead565b613e519060608b01611150565b51613e5b90610ead565b613e689060808a01611150565b60a0868101519089015260c08601511515151560c089015260e08601511515151560e0890152439088015251925191808401518183820151910151151592613eae610d20565b94855284015290151590820152613ec491612612565b906101209182850152015190820152613edc90611e9b565b388080808080613bba565b90506001541438612bb3565b60006124a5928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152613f3781610c37565b5193165af16123ee613f47612443565b80926124d8565b6000916124a59383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152613f3781610c37565b6040519061012082016001600160401b03811183821017613ff6575b60405281610100600091828152826020820152826040820152826060820152613fd4610e6f565b6080820152613fe1610e6f565b60a08201528260c08201528260e08201520152565b613ffe610b8b565b613fad565b6040519061401082610ba2565b81600081526020611daa613f91565b6040519061402c82610ba2565b81614035610e6f565b81526020611daa613f9156fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace43559fdbda3802be12785165433940170227c305b1c57d809d0c2950cdff3037a164736f6c6343000811000a`,
    BytecodeLen: 19089,
    version: 9,
    views: {}
};
export const _stateSourceMap = {
    1: {
        at: './src/contracts/coin_shop.rsh:115:17:after expr stmt semicolon',
        fs: [],
        msg: null,
        who: 'Module'
    },
    3: {
        at: './src/contracts/coin_shop.rsh:308:17:after expr stmt semicolon',
        fs: [],
        msg: null,
        who: 'Module'
    },
    4: {
        at: 'reach standard library:199:11:after expr stmt semicolon',
        fs: ['at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: null,
        who: 'Module'
    },
    5: {
        at: './src/contracts/coin_shop.rsh:123:68:after expr stmt semicolon',
        fs: [],
        msg: null,
        who: 'Module'
    }
};
export const _Connectors = {
    ALGO: _ALGO,
    ETH: _ETH
};
export const _Participants = {
    "Admin": Admin,
    "Deployer": Deployer,
    "buyer_api_bronze": buyer_api_bronze,
    "buyer_api_gold": buyer_api_gold,
    "buyer_api_silver": buyer_api_silver,
    "controller_api_restock": controller_api_restock,
    "controller_api_set_prices": controller_api_set_prices,
    "controller_api_terminate": controller_api_terminate,
    "controller_api_toggle_pause": controller_api_toggle_pause,
    "controller_api_withdraw": controller_api_withdraw
};
export const _APIs = {
    buyer_api: {
        bronze: buyer_api_bronze,
        gold: buyer_api_gold,
        silver: buyer_api_silver
    },
    controller_api: {
        restock: controller_api_restock,
        set_prices: controller_api_set_prices,
        terminate: controller_api_terminate,
        toggle_pause: controller_api_toggle_pause,
        withdraw: controller_api_withdraw
    }
};
