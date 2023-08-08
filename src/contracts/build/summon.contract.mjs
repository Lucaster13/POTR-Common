// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  return {
    result: [ctc0],
    status: [ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc3, ctc4, ctc4, ctc0],
      3: [ctc4, ctc4, ctc4, ctc5, ctc3, ctc0],
      5: [ctc4, ctc4, ctc4, ctc5, ctc3, ctc0, ctc0],
      7: [ctc4, ctc4, ctc4, ctc5, ctc5, ctc3, ctc0, ctc0],
      9: [ctc4, ctc4, ctc4, ctc5, ctc5, ctc3, ctc0, ctc2, ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v500 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v501 = [v500, v500];
  const v505 = stdlib.protect(ctc0, interact.coin, 'for Admin\'s interact field coin');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v508, time: v507, didSend: v23, from: v506 } = txn1;
  ;
  const v509 = 'PREPARING           ';
  null;
  const v510 = v506;
  const v517 = stdlib.add(v507, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
  const v527 = 'published coin';
  stdlib.protect(ctc1, await interact.log(v527), {
    at: './src/contracts/summon.rsh:90:29:application',
    fs: ['at ./src/contracts/summon.rsh:88:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:88:23:function exp)'],
    msg: 'log',
    who: 'Admin'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v501, v506, v510, v517, v505],
    evt_cnt: 1,
    funcNum: 1,
    lct: v507,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v529], secs: v531, time: v530, didSend: v40, from: v528 } = txn2;
      
      const v532 = v501[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0')];
      const v533 = stdlib.Array_set(v532, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'));
      const v534 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'), v533);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v529
        });
      ;
      const v536 = 'PAYING              ';
      null;
      const v540 = stdlib.add(v530, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v517],
    tys: [ctc6, ctc2, ctc2, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const v837 = 'failed to publish coin';
    stdlib.protect(ctc1, await interact.log(v837), {
      at: './src/contracts/summon.rsh:93:35:application',
      fs: ['at ./src/contracts/summon.rsh:93:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:93:35:function exp)', 'at ./src/contracts/summon.rsh:93:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:93:35:application)'],
      msg: 'log',
      who: 'Admin'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v501, v506, v510, v517],
      evt_cnt: 0,
      funcNum: 2,
      lct: v507,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v840, time: v839, didSend: v424, from: v838 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v840, time: v839, didSend: v424, from: v838 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v529], secs: v531, time: v530, didSend: v40, from: v528 } = txn2;
    const v532 = v501[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0')];
    const v533 = stdlib.Array_set(v532, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'));
    const v534 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'), v533);
    ;
    ;
    const v536 = 'PAYING              ';
    null;
    const v540 = stdlib.add(v530, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ['time', v540],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const v814 = 'failed to pay coin';
      stdlib.protect(ctc1, await interact.log(v814), {
        at: './src/contracts/summon.rsh:107:35:application',
        fs: ['at ./src/contracts/summon.rsh:107:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:107:35:function exp)', 'at ./src/contracts/summon.rsh:107:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:107:35:application)'],
        msg: 'log',
        who: 'Admin'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v506, v510, v528, v529, v534, v540],
        evt_cnt: 0,
        funcNum: 4,
        lct: v530,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v817, time: v816, didSend: v382, from: v815 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: v529
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v817, time: v816, didSend: v382, from: v815 } = txn4;
      ;
      const v818 = stdlib.addressEq(v528, v815);
      const v819 = stdlib.addressEq(v506, v815);
      const v820 = v818 ? true : v819;
      const v821 = stdlib.addressEq(v510, v815);
      const v822 = v820 ? true : v821;
      stdlib.assert(v822, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./src/contracts/summon.rsh:109:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Admin'
        });
      return;
      
      }
    else {
      const {data: [], secs: v550, time: v549, didSend: v50, from: v548 } = txn3;
      ;
      const v551 = v534[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
      const v552 = v551[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
      const v553 = stdlib.add(v552, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:24:decimal', stdlib.UInt_max, '1'));
      const v554 = stdlib.le(v553, stdlib.UInt_max);
      stdlib.assert(v554, {
        at: './src/contracts/summon.rsh:106:18:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'Admin'
        });
      const v557 = stdlib.Array_set(v551, '0', v553);
      const v558 = stdlib.Array_set(v534, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0'), v557);
      ;
      const v559 = stdlib.addressEq(v510, v548);
      stdlib.assert(v559, {
        at: './src/contracts/summon.rsh:106:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Admin'
        });
      const v560 = 'SUMMONING           ';
      null;
      const v564 = stdlib.add(v549, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
      const v572 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
      const v573 = v572[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
      const v576 = stdlib.protect(ctc0, await interact.get_potr(v529), {
        at: './src/contracts/summon.rsh:122:58:application',
        fs: ['at ./src/contracts/summon.rsh:120:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:120:23:function exp)'],
        msg: 'get_potr',
        who: 'Admin'
        });
      const v577 = stdlib.tokenEq(v576, v529);
      const v578 = v577 ? false : true;
      stdlib.assert(v578, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/summon.rsh:124:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/summon.rsh:120:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:120:23:function exp)'],
        msg: 'The asa ids provided are the same',
        who: 'Admin'
        });
      const v580 = 'published potr';
      stdlib.protect(ctc1, await interact.log(v580), {
        at: './src/contracts/summon.rsh:125:29:application',
        fs: ['at ./src/contracts/summon.rsh:120:19:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:120:23:function exp)'],
        msg: 'log',
        who: 'Admin'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v506, v510, v528, v529, v558, v564, v573, v576],
        evt_cnt: 1,
        funcNum: 5,
        lct: v549,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v582], secs: v584, time: v583, didSend: v83, from: v581 } = txn4;
          
          const v585 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1')];
          const v586 = stdlib.Array_set(v585, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '0'));
          const v587 = stdlib.Array_set(v558, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1'), v586);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            kind: 'init',
            tok: v582
            });
          ;
          const v595 = stdlib.add(v583, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
          const v603 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
          const v604 = v603[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v564],
        tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3, ctc3, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const v780 = 'failed to publish potr';
        stdlib.protect(ctc1, await interact.log(v780), {
          at: './src/contracts/summon.rsh:128:35:application',
          fs: ['at ./src/contracts/summon.rsh:128:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:128:35:function exp)', 'at ./src/contracts/summon.rsh:128:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:128:35:application)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v506, v510, v528, v529, v558, v564, v573],
          evt_cnt: 0,
          funcNum: 6,
          lct: v549,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v783, time: v782, didSend: v329, from: v781 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v510,
              tok: v529
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v529
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc2, ctc2, ctc0, ctc6, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v783, time: v782, didSend: v329, from: v781 } = txn5;
        ;
        const v784 = stdlib.addressEq(v528, v781);
        const v785 = stdlib.addressEq(v506, v781);
        const v786 = v784 ? true : v785;
        const v787 = stdlib.addressEq(v510, v781);
        const v788 = v786 ? true : v787;
        stdlib.assert(v788, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./src/contracts/summon.rsh:130:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v801 = stdlib.sub(v573, v573);
        const v802 = stdlib.ge(v801, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
        stdlib.assert(v802, {
          at: 'reach standard library:198:46:application',
          fs: ['at ./src/contracts/summon.rsh:130:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        return;
        
        }
      else {
        const {data: [v582], secs: v584, time: v583, didSend: v83, from: v581 } = txn4;
        const v585 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1')];
        const v586 = stdlib.Array_set(v585, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '0'));
        const v587 = stdlib.Array_set(v558, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1'), v586);
        const v589 = stdlib.tokenEq(v582, v529);
        const v590 = v589 ? false : true;
        stdlib.assert(v590, {
          at: './src/contracts/summon.rsh:127:15:dot',
          fs: [],
          msg: 'non-network tokens distinct',
          who: 'Admin'
          });
        ;
        ;
        const v591 = stdlib.addressEq(v528, v581);
        stdlib.assert(v591, {
          at: './src/contracts/summon.rsh:127:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v595 = stdlib.add(v583, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
        const v603 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
        const v604 = v603[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
        const txn5 = await (ctc.sendrecv({
          args: [v506, v510, v528, v529, v582, v587, v595, v604],
          evt_cnt: 0,
          funcNum: 7,
          lct: v583,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:21:decimal', stdlib.UInt_max, '1'), v582]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v607, time: v606, didSend: v92, from: v605 } = txn5;
            
            ;
            const v608 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1')];
            const v609 = v608[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '0')];
            const v610 = stdlib.add(v609, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:21:decimal', stdlib.UInt_max, '1'));
            const v614 = stdlib.Array_set(v608, '0', v610);
            const v615 = stdlib.Array_set(v587, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1'), v614);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:21:decimal', stdlib.UInt_max, '1'),
              kind: 'to',
              tok: v582
              });
            const v617 = 'CLAIMING            ';
            null;
            const v621 = stdlib.add(v606, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
            const v629 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '1')];
            const v630 = v629[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '0')];
            const v631 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
            const v632 = v631[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v595],
          tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const v743 = 'failed to deposit potr';
          stdlib.protect(ctc1, await interact.log(v743), {
            at: './src/contracts/summon.rsh:134:35:application',
            fs: ['at ./src/contracts/summon.rsh:134:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:134:35:function exp)', 'at ./src/contracts/summon.rsh:134:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:134:35:application)'],
            msg: 'log',
            who: 'Admin'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v506, v510, v528, v529, v582, v587, v595, v604],
            evt_cnt: 0,
            funcNum: 8,
            lct: v583,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v746, time: v745, didSend: v273, from: v744 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v510,
                tok: v529
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v582
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v529
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v746, time: v745, didSend: v273, from: v744 } = txn6;
          ;
          const v747 = stdlib.addressEq(v528, v744);
          const v748 = stdlib.addressEq(v506, v744);
          const v749 = v747 ? true : v748;
          const v750 = stdlib.addressEq(v510, v744);
          const v751 = v749 ? true : v750;
          stdlib.assert(v751, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./src/contracts/summon.rsh:136:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Admin'
            });
          const v764 = stdlib.sub(v604, v604);
          const v765 = stdlib.ge(v764, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
          stdlib.assert(v765, {
            at: 'reach standard library:198:46:application',
            fs: ['at ./src/contracts/summon.rsh:136:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'assume >= 0',
            who: 'Admin'
            });
          ;
          return;
          
          }
        else {
          const {data: [], secs: v607, time: v606, didSend: v92, from: v605 } = txn5;
          ;
          const v608 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1')];
          const v609 = v608[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '0')];
          const v610 = stdlib.add(v609, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:21:decimal', stdlib.UInt_max, '1'));
          const v611 = stdlib.le(v610, stdlib.UInt_max);
          stdlib.assert(v611, {
            at: './src/contracts/summon.rsh:133:15:dot',
            fs: [],
            msg: 'assume <= UInt.max',
            who: 'Admin'
            });
          const v614 = stdlib.Array_set(v608, '0', v610);
          const v615 = stdlib.Array_set(v587, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1'), v614);
          ;
          const v616 = stdlib.addressEq(v528, v605);
          stdlib.assert(v616, {
            at: './src/contracts/summon.rsh:133:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Admin'
            });
          const v617 = 'CLAIMING            ';
          null;
          const v621 = stdlib.add(v606, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
          const v629 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '1')];
          const v630 = v629[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '0')];
          const v631 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
          const v632 = v631[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: ['time', v621],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const v686 = 'failed to opt in';
            stdlib.protect(ctc1, await interact.log(v686), {
              at: './src/contracts/summon.rsh:153:43:application',
              fs: ['at ./src/contracts/summon.rsh:153:43:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:153:43:function exp)', 'at ./src/contracts/summon.rsh:153:43:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:153:43:application)'],
              msg: 'log',
              who: 'Admin'
              });
            
            const txn7 = await (ctc.sendrecv({
              args: [v506, v510, v528, v529, v582, v615, v621, v629, v630, v632],
              evt_cnt: 0,
              funcNum: 10,
              lct: v606,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v689, time: v688, didSend: v199, from: v687 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: v582
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: v529
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v582
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v529
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc6, ctc3, ctc5, ctc3, ctc3],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v689, time: v688, didSend: v199, from: v687 } = txn7;
            ;
            const v690 = stdlib.addressEq(v528, v687);
            const v691 = stdlib.addressEq(v506, v687);
            const v692 = v690 ? true : v691;
            const v693 = stdlib.addressEq(v510, v687);
            const v694 = v692 ? true : v693;
            stdlib.assert(v694, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Admin'
              });
            const v716 = stdlib.sub(v630, v630);
            const v717 = stdlib.ge(v716, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
            stdlib.assert(v717, {
              at: 'reach standard library:198:46:application',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'assume >= 0',
              who: 'Admin'
              });
            const v720 = stdlib.Array_set(v629, '0', v716);
            const v721 = stdlib.Array_set(v615, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v720);
            ;
            const v722 = v721[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
            const v723 = v722[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
            const v727 = stdlib.sub(v723, v632);
            const v728 = stdlib.ge(v727, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
            stdlib.assert(v728, {
              at: 'reach standard library:198:46:application',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'assume >= 0',
              who: 'Admin'
              });
            ;
            return;
            
            }
          else {
            const {data: [], secs: v638, time: v637, didSend: v102, from: v636 } = txn6;
            ;
            const v639 = stdlib.addressEq(v510, v636);
            stdlib.assert(v639, {
              at: './src/contracts/summon.rsh:150:18:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Admin'
              });
            const v642 = stdlib.eq(v632, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:162:33:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v642, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/summon.rsh:162:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
              msg: null,
              who: 'Admin'
              });
            const v646 = stdlib.eq(v630, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:163:33:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v646, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/summon.rsh:163:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
              msg: null,
              who: 'Admin'
              });
            const v655 = stdlib.sub(v630, v630);
            const v656 = stdlib.ge(v655, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:166:45:application', stdlib.UInt_max, '0'));
            stdlib.assert(v656, {
              at: './src/contracts/summon.rsh:166:45:application',
              fs: [],
              msg: 'assume >= 0',
              who: 'Admin'
              });
            const v659 = stdlib.Array_set(v629, '0', v655);
            const v660 = stdlib.Array_set(v615, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:166:45:application', stdlib.UInt_max, '1'), v659);
            ;
            const v661 = v660[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
            const v662 = v661[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
            const v668 = stdlib.sub(v662, v662);
            const v669 = stdlib.ge(v668, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:45:application', stdlib.UInt_max, '0'));
            stdlib.assert(v669, {
              at: './src/contracts/summon.rsh:167:45:application',
              fs: [],
              msg: 'assume >= 0',
              who: 'Admin'
              });
            ;
            const v674 = 'SUCCESS             ';
            null;
            const v684 = 'success';
            stdlib.protect(ctc1, await interact.log(v684), {
              at: './src/contracts/summon.rsh:172:27:application',
              fs: ['at ./src/contracts/summon.rsh:172:27:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:172:27:function exp)', 'at ./src/contracts/summon.rsh:172:27:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:172:27:application)'],
              msg: 'log',
              who: 'Admin'
              });
            
            return;
            }
          
          }
        
        }
      
      }
    
    }
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v500 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v501 = [v500, v500];
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/summon.rsh:74:18:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/summon.rsh:74:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v508, time: v507, didSend: v23, from: v506 } = txn1;
      
      ;
      const v509 = 'PREPARING           ';
      null;
      const v510 = v506;
      const v511 = await ctc.getContractInfo();
      const v512 = await ctc.getContractAddress();
      
      const v517 = stdlib.add(v507, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v508, time: v507, didSend: v23, from: v506 } = txn1;
  ;
  const v509 = 'PREPARING           ';
  null;
  const v510 = v506;
  const v511 = await ctc.getContractInfo();
  const v512 = await ctc.getContractAddress();
  stdlib.protect(ctc0, await interact.deployed(v511, v512), {
    at: './src/contracts/summon.rsh:79:35:application',
    fs: ['at ./src/contracts/summon.rsh:79:35:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:79:35:function exp)', 'at ./src/contracts/summon.rsh:79:35:application call to "liftedInteract" (defined at: ./src/contracts/summon.rsh:79:35:application)'],
    msg: 'deployed',
    who: 'Deployer'
    });
  
  const v517 = stdlib.add(v507, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: ['time', v517],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v501, v506, v510, v517],
      evt_cnt: 0,
      funcNum: 2,
      lct: v507,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v840, time: v839, didSend: v424, from: v838 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v840, time: v839, didSend: v424, from: v838 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v529], secs: v531, time: v530, didSend: v40, from: v528 } = txn2;
    const v532 = v501[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0')];
    const v533 = stdlib.Array_set(v532, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'));
    const v534 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'), v533);
    ;
    ;
    const v536 = 'PAYING              ';
    null;
    const v540 = stdlib.add(v530, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: ['time', v540],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v506, v510, v528, v529, v534, v540],
        evt_cnt: 0,
        funcNum: 4,
        lct: v530,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v817, time: v816, didSend: v382, from: v815 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: v529
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc2, ctc2, ctc1, ctc6, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v817, time: v816, didSend: v382, from: v815 } = txn4;
      ;
      const v818 = stdlib.addressEq(v528, v815);
      const v819 = stdlib.addressEq(v506, v815);
      const v820 = v818 ? true : v819;
      const v821 = stdlib.addressEq(v510, v815);
      const v822 = v820 ? true : v821;
      stdlib.assert(v822, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./src/contracts/summon.rsh:109:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
        });
      return;
      
      }
    else {
      const {data: [], secs: v550, time: v549, didSend: v50, from: v548 } = txn3;
      ;
      const v551 = v534[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
      const v552 = v551[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
      const v553 = stdlib.add(v552, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:24:decimal', stdlib.UInt_max, '1'));
      const v554 = stdlib.le(v553, stdlib.UInt_max);
      stdlib.assert(v554, {
        at: './src/contracts/summon.rsh:106:18:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'Deployer'
        });
      const v557 = stdlib.Array_set(v551, '0', v553);
      const v558 = stdlib.Array_set(v534, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0'), v557);
      ;
      const v559 = stdlib.addressEq(v510, v548);
      stdlib.assert(v559, {
        at: './src/contracts/summon.rsh:106:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v560 = 'SUMMONING           ';
      null;
      const v564 = stdlib.add(v549, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
      const v572 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
      const v573 = v572[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: ['time', v564],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v506, v510, v528, v529, v558, v564, v573],
          evt_cnt: 0,
          funcNum: 6,
          lct: v549,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v783, time: v782, didSend: v329, from: v781 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v510,
              tok: v529
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v529
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc2, ctc2, ctc1, ctc6, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v783, time: v782, didSend: v329, from: v781 } = txn5;
        ;
        const v784 = stdlib.addressEq(v528, v781);
        const v785 = stdlib.addressEq(v506, v781);
        const v786 = v784 ? true : v785;
        const v787 = stdlib.addressEq(v510, v781);
        const v788 = v786 ? true : v787;
        stdlib.assert(v788, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./src/contracts/summon.rsh:130:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v801 = stdlib.sub(v573, v573);
        const v802 = stdlib.ge(v801, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
        stdlib.assert(v802, {
          at: 'reach standard library:198:46:application',
          fs: ['at ./src/contracts/summon.rsh:130:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        ;
        return;
        
        }
      else {
        const {data: [v582], secs: v584, time: v583, didSend: v83, from: v581 } = txn4;
        const v585 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1')];
        const v586 = stdlib.Array_set(v585, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '0'));
        const v587 = stdlib.Array_set(v558, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1'), v586);
        const v589 = stdlib.tokenEq(v582, v529);
        const v590 = v589 ? false : true;
        stdlib.assert(v590, {
          at: './src/contracts/summon.rsh:127:15:dot',
          fs: [],
          msg: 'non-network tokens distinct',
          who: 'Deployer'
          });
        ;
        ;
        const v591 = stdlib.addressEq(v528, v581);
        stdlib.assert(v591, {
          at: './src/contracts/summon.rsh:127:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v595 = stdlib.add(v583, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
        const v603 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
        const v604 = v603[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeoutAt: ['time', v595],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v506, v510, v528, v529, v582, v587, v595, v604],
            evt_cnt: 0,
            funcNum: 8,
            lct: v583,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v746, time: v745, didSend: v273, from: v744 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v510,
                tok: v529
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v582
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v529
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc2, ctc2, ctc1, ctc1, ctc6, ctc3, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v746, time: v745, didSend: v273, from: v744 } = txn6;
          ;
          const v747 = stdlib.addressEq(v528, v744);
          const v748 = stdlib.addressEq(v506, v744);
          const v749 = v747 ? true : v748;
          const v750 = stdlib.addressEq(v510, v744);
          const v751 = v749 ? true : v750;
          stdlib.assert(v751, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./src/contracts/summon.rsh:136:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v764 = stdlib.sub(v604, v604);
          const v765 = stdlib.ge(v764, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
          stdlib.assert(v765, {
            at: 'reach standard library:198:46:application',
            fs: ['at ./src/contracts/summon.rsh:136:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'assume >= 0',
            who: 'Deployer'
            });
          ;
          return;
          
          }
        else {
          const {data: [], secs: v607, time: v606, didSend: v92, from: v605 } = txn5;
          ;
          const v608 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1')];
          const v609 = v608[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '0')];
          const v610 = stdlib.add(v609, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:21:decimal', stdlib.UInt_max, '1'));
          const v611 = stdlib.le(v610, stdlib.UInt_max);
          stdlib.assert(v611, {
            at: './src/contracts/summon.rsh:133:15:dot',
            fs: [],
            msg: 'assume <= UInt.max',
            who: 'Deployer'
            });
          const v614 = stdlib.Array_set(v608, '0', v610);
          const v615 = stdlib.Array_set(v587, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1'), v614);
          ;
          const v616 = stdlib.addressEq(v528, v605);
          stdlib.assert(v616, {
            at: './src/contracts/summon.rsh:133:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v617 = 'CLAIMING            ';
          null;
          const v621 = stdlib.add(v606, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
          const v629 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '1')];
          const v630 = v629[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '0')];
          const v631 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
          const v632 = v631[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: ['time', v621],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v506, v510, v528, v529, v582, v615, v621, v629, v630, v632],
              evt_cnt: 0,
              funcNum: 10,
              lct: v606,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v689, time: v688, didSend: v199, from: v687 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: v582
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: v529
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v582
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v529
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc2, ctc2, ctc2, ctc1, ctc1, ctc6, ctc3, ctc5, ctc3, ctc3],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v689, time: v688, didSend: v199, from: v687 } = txn7;
            ;
            const v690 = stdlib.addressEq(v528, v687);
            const v691 = stdlib.addressEq(v506, v687);
            const v692 = v690 ? true : v691;
            const v693 = stdlib.addressEq(v510, v687);
            const v694 = v692 ? true : v693;
            stdlib.assert(v694, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
              });
            const v716 = stdlib.sub(v630, v630);
            const v717 = stdlib.ge(v716, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
            stdlib.assert(v717, {
              at: 'reach standard library:198:46:application',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'assume >= 0',
              who: 'Deployer'
              });
            const v720 = stdlib.Array_set(v629, '0', v716);
            const v721 = stdlib.Array_set(v615, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v720);
            ;
            const v722 = v721[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
            const v723 = v722[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
            const v727 = stdlib.sub(v723, v632);
            const v728 = stdlib.ge(v727, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
            stdlib.assert(v728, {
              at: 'reach standard library:198:46:application',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'assume >= 0',
              who: 'Deployer'
              });
            ;
            return;
            
            }
          else {
            const {data: [], secs: v638, time: v637, didSend: v102, from: v636 } = txn6;
            ;
            const v639 = stdlib.addressEq(v510, v636);
            stdlib.assert(v639, {
              at: './src/contracts/summon.rsh:150:18:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Deployer'
              });
            const v642 = stdlib.eq(v632, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:162:33:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v642, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/summon.rsh:162:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v646 = stdlib.eq(v630, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:163:33:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v646, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/summon.rsh:163:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v655 = stdlib.sub(v630, v630);
            const v656 = stdlib.ge(v655, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:166:45:application', stdlib.UInt_max, '0'));
            stdlib.assert(v656, {
              at: './src/contracts/summon.rsh:166:45:application',
              fs: [],
              msg: 'assume >= 0',
              who: 'Deployer'
              });
            const v659 = stdlib.Array_set(v629, '0', v655);
            const v660 = stdlib.Array_set(v615, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:166:45:application', stdlib.UInt_max, '1'), v659);
            ;
            const v661 = v660[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
            const v662 = v661[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
            const v668 = stdlib.sub(v662, v662);
            const v669 = stdlib.ge(v668, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:45:application', stdlib.UInt_max, '0'));
            stdlib.assert(v669, {
              at: './src/contracts/summon.rsh:167:45:application',
              fs: [],
              msg: 'assume >= 0',
              who: 'Deployer'
              });
            ;
            const v674 = 'SUCCESS             ';
            null;
            return;
            }
          
          }
        
        }
      
      }
    
    }
  
  
  
  };
export async function Summoner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Summoner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Summoner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v500 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v501 = [v500, v500];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v508, time: v507, didSend: v23, from: v506 } = txn1;
  ;
  const v509 = 'PREPARING           ';
  null;
  const v510 = ctc.iam(v506);
  const v517 = stdlib.add(v507, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v517],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v501, v506, v510, v517],
      evt_cnt: 0,
      funcNum: 2,
      lct: v507,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v840, time: v839, didSend: v424, from: v838 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc2, ctc2, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v840, time: v839, didSend: v424, from: v838 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v529], secs: v531, time: v530, didSend: v40, from: v528 } = txn2;
    const v532 = v501[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0')];
    const v533 = stdlib.Array_set(v532, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'));
    const v534 = stdlib.Array_set(v501, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:92:15:dot', stdlib.UInt_max, '0'), v533);
    ;
    ;
    const v536 = 'PAYING              ';
    null;
    const v540 = stdlib.add(v530, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
    const txn3 = await (ctc.sendrecv({
      args: [v506, v510, v528, v529, v534, v540],
      evt_cnt: 0,
      funcNum: 3,
      lct: v530,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:24:decimal', stdlib.UInt_max, '1'), v529]]],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v550, time: v549, didSend: v50, from: v548 } = txn3;
        
        ;
        const v551 = v534[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
        const v552 = v551[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
        const v553 = stdlib.add(v552, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:24:decimal', stdlib.UInt_max, '1'));
        const v557 = stdlib.Array_set(v551, '0', v553);
        const v558 = stdlib.Array_set(v534, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0'), v557);
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:24:decimal', stdlib.UInt_max, '1'),
          kind: 'to',
          tok: v529
          });
        const v560 = 'SUMMONING           ';
        null;
        const v564 = stdlib.add(v549, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
        const v572 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
        const v573 = v572[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v540],
      tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v506, v510, v528, v529, v534, v540],
        evt_cnt: 0,
        funcNum: 4,
        lct: v530,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v817, time: v816, didSend: v382, from: v815 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: v529
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v817, time: v816, didSend: v382, from: v815 } = txn4;
      ;
      const v818 = stdlib.addressEq(v528, v815);
      const v819 = stdlib.addressEq(v506, v815);
      const v820 = v818 ? true : v819;
      const v821 = stdlib.addressEq(v510, v815);
      const v822 = v820 ? true : v821;
      stdlib.assert(v822, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./src/contracts/summon.rsh:109:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Summoner'
        });
      return;
      
      }
    else {
      const {data: [], secs: v550, time: v549, didSend: v50, from: v548 } = txn3;
      ;
      const v551 = v534[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
      const v552 = v551[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0')];
      const v553 = stdlib.add(v552, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:24:decimal', stdlib.UInt_max, '1'));
      const v554 = stdlib.le(v553, stdlib.UInt_max);
      stdlib.assert(v554, {
        at: './src/contracts/summon.rsh:106:18:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'Summoner'
        });
      const v557 = stdlib.Array_set(v551, '0', v553);
      const v558 = stdlib.Array_set(v534, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:106:18:dot', stdlib.UInt_max, '0'), v557);
      ;
      const v559 = stdlib.addressEq(v510, v548);
      stdlib.assert(v559, {
        at: './src/contracts/summon.rsh:106:18:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Summoner'
        });
      const v560 = 'SUMMONING           ';
      null;
      const v564 = stdlib.add(v549, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
      const v572 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
      const v573 = v572[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:130:54:application', stdlib.UInt_max, '0')];
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v564],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v506, v510, v528, v529, v558, v564, v573],
          evt_cnt: 0,
          funcNum: 6,
          lct: v549,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v783, time: v782, didSend: v329, from: v781 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v510,
              tok: v529
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v529
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc2, ctc2, ctc0, ctc5, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v783, time: v782, didSend: v329, from: v781 } = txn5;
        ;
        const v784 = stdlib.addressEq(v528, v781);
        const v785 = stdlib.addressEq(v506, v781);
        const v786 = v784 ? true : v785;
        const v787 = stdlib.addressEq(v510, v781);
        const v788 = v786 ? true : v787;
        stdlib.assert(v788, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./src/contracts/summon.rsh:130:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Summoner'
          });
        const v801 = stdlib.sub(v573, v573);
        const v802 = stdlib.ge(v801, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
        stdlib.assert(v802, {
          at: 'reach standard library:198:46:application',
          fs: ['at ./src/contracts/summon.rsh:130:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'assume >= 0',
          who: 'Summoner'
          });
        ;
        return;
        
        }
      else {
        const {data: [v582], secs: v584, time: v583, didSend: v83, from: v581 } = txn4;
        const v585 = v558[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1')];
        const v586 = stdlib.Array_set(v585, '0', stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '0'));
        const v587 = stdlib.Array_set(v558, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:127:15:dot', stdlib.UInt_max, '1'), v586);
        const v589 = stdlib.tokenEq(v582, v529);
        const v590 = v589 ? false : true;
        stdlib.assert(v590, {
          at: './src/contracts/summon.rsh:127:15:dot',
          fs: [],
          msg: 'non-network tokens distinct',
          who: 'Summoner'
          });
        ;
        ;
        const v591 = stdlib.addressEq(v528, v581);
        stdlib.assert(v591, {
          at: './src/contracts/summon.rsh:127:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Summoner'
          });
        const v595 = stdlib.add(v583, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
        const v603 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
        const v604 = v603[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:136:54:application', stdlib.UInt_max, '0')];
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 7,
          out_tys: [],
          timeoutAt: ['time', v595],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v506, v510, v528, v529, v582, v587, v595, v604],
            evt_cnt: 0,
            funcNum: 8,
            lct: v583,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v746, time: v745, didSend: v273, from: v744 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v510,
                tok: v529
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v582
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v529
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc3],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v746, time: v745, didSend: v273, from: v744 } = txn6;
          ;
          const v747 = stdlib.addressEq(v528, v744);
          const v748 = stdlib.addressEq(v506, v744);
          const v749 = v747 ? true : v748;
          const v750 = stdlib.addressEq(v510, v744);
          const v751 = v749 ? true : v750;
          stdlib.assert(v751, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./src/contracts/summon.rsh:136:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Summoner'
            });
          const v764 = stdlib.sub(v604, v604);
          const v765 = stdlib.ge(v764, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
          stdlib.assert(v765, {
            at: 'reach standard library:198:46:application',
            fs: ['at ./src/contracts/summon.rsh:136:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'assume >= 0',
            who: 'Summoner'
            });
          ;
          return;
          
          }
        else {
          const {data: [], secs: v607, time: v606, didSend: v92, from: v605 } = txn5;
          ;
          const v608 = v587[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1')];
          const v609 = v608[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '0')];
          const v610 = stdlib.add(v609, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:21:decimal', stdlib.UInt_max, '1'));
          const v611 = stdlib.le(v610, stdlib.UInt_max);
          stdlib.assert(v611, {
            at: './src/contracts/summon.rsh:133:15:dot',
            fs: [],
            msg: 'assume <= UInt.max',
            who: 'Summoner'
            });
          const v614 = stdlib.Array_set(v608, '0', v610);
          const v615 = stdlib.Array_set(v587, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:133:15:dot', stdlib.UInt_max, '1'), v614);
          ;
          const v616 = stdlib.addressEq(v528, v605);
          stdlib.assert(v616, {
            at: './src/contracts/summon.rsh:133:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Summoner'
            });
          const v617 = 'CLAIMING            ';
          null;
          const v621 = stdlib.add(v606, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:30:24:decimal', stdlib.UInt_max, '20'));
          const v629 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '1')];
          const v630 = v629[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:157:41:application', stdlib.UInt_max, '0')];
          const v631 = v615[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
          const v632 = v631[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:158:41:application', stdlib.UInt_max, '0')];
          const v635 = stdlib.protect(ctc1, await interact.opt_in(v582), {
            at: './src/contracts/summon.rsh:148:59:application',
            fs: ['at ./src/contracts/summon.rsh:147:22:application call to [unknown function] (defined at: ./src/contracts/summon.rsh:147:26:function exp)'],
            msg: 'opt_in',
            who: 'Summoner'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v506, v510, v528, v529, v582, v615, v621, v629, v630, v632],
            evt_cnt: 0,
            funcNum: 9,
            lct: v606,
            onlyIf: v635,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./src/contracts/summon.rsh:150:18:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v638, time: v637, didSend: v102, from: v636 } = txn6;
              
              ;
              const v655 = stdlib.sub(v630, v630);
              const v659 = stdlib.Array_set(v629, '0', v655);
              const v660 = stdlib.Array_set(v615, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:166:45:application', stdlib.UInt_max, '1'), v659);
              sim_r.txns.push({
                kind: 'from',
                to: v510,
                tok: v582
                });
              const v661 = v660[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
              const v662 = v661[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v528,
                tok: v529
                });
              const v674 = 'SUCCESS             ';
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v582
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: v529
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v621],
            tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc4, ctc3, ctc3],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v506, v510, v528, v529, v582, v615, v621, v629, v630, v632],
              evt_cnt: 0,
              funcNum: 10,
              lct: v606,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v689, time: v688, didSend: v199, from: v687 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: v582
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v528,
                  tok: v529
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v582
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v529
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc2, ctc2, ctc2, ctc0, ctc0, ctc5, ctc3, ctc4, ctc3, ctc3],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v689, time: v688, didSend: v199, from: v687 } = txn7;
            ;
            const v690 = stdlib.addressEq(v528, v687);
            const v691 = stdlib.addressEq(v506, v687);
            const v692 = v690 ? true : v691;
            const v693 = stdlib.addressEq(v510, v687);
            const v694 = v692 ? true : v693;
            stdlib.assert(v694, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Summoner'
              });
            const v716 = stdlib.sub(v630, v630);
            const v717 = stdlib.ge(v716, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
            stdlib.assert(v717, {
              at: 'reach standard library:198:46:application',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'assume >= 0',
              who: 'Summoner'
              });
            const v720 = stdlib.Array_set(v629, '0', v716);
            const v721 = stdlib.Array_set(v615, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v720);
            ;
            const v722 = v721[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
            const v723 = v722[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
            const v727 = stdlib.sub(v723, v632);
            const v728 = stdlib.ge(v727, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
            stdlib.assert(v728, {
              at: 'reach standard library:198:46:application',
              fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'assume >= 0',
              who: 'Summoner'
              });
            ;
            return;
            
            }
          else {
            const {data: [], secs: v638, time: v637, didSend: v102, from: v636 } = txn6;
            ;
            const v639 = stdlib.addressEq(v510, v636);
            stdlib.assert(v639, {
              at: './src/contracts/summon.rsh:150:18:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Summoner'
              });
            const v642 = stdlib.eq(v632, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:162:33:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v642, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/summon.rsh:162:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
              msg: null,
              who: 'Summoner'
              });
            const v646 = stdlib.eq(v630, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:163:33:decimal', stdlib.UInt_max, '1'));
            stdlib.assert(v646, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/summon.rsh:163:14:application call to "check" (defined at: reach standard library:49:32:function exp)'],
              msg: null,
              who: 'Summoner'
              });
            const v655 = stdlib.sub(v630, v630);
            const v656 = stdlib.ge(v655, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:166:45:application', stdlib.UInt_max, '0'));
            stdlib.assert(v656, {
              at: './src/contracts/summon.rsh:166:45:application',
              fs: [],
              msg: 'assume >= 0',
              who: 'Summoner'
              });
            const v659 = stdlib.Array_set(v629, '0', v655);
            const v660 = stdlib.Array_set(v615, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:166:45:application', stdlib.UInt_max, '1'), v659);
            ;
            const v661 = v660[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
            const v662 = v661[stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:27:application', stdlib.UInt_max, '0')];
            const v668 = stdlib.sub(v662, v662);
            const v669 = stdlib.ge(v668, stdlib.checkedBigNumberify('./src/contracts/summon.rsh:167:45:application', stdlib.UInt_max, '0'));
            stdlib.assert(v669, {
              at: './src/contracts/summon.rsh:167:45:application',
              fs: [],
              msg: 'assume >= 0',
              who: 'Summoner'
              });
            ;
            const v674 = 'SUCCESS             ';
            null;
            return;
            }
          
          }
        
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_10((uint64))void`, `_reachp_2((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64))void`, `_reachp_5((uint64,uint64))void`, `_reachp_6((uint64))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64))void`, `_reachp_9((uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64))void`, `_reachp_1((uint64,uint64))void`, `_reachp_10((uint64))void`, `_reachp_2((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64))void`, `_reachp_5((uint64,uint64))void`, `_reachp_6((uint64))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64))void`, `_reachp_9((uint64))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAEIFAMFYKCNBgkHkgH///////////8BBIoBaCYEBEDs55MAAQABATEYQQYlKWRJIls1ASRbNQIqZCtkUIILBAodJkkEcGvbsQR1DuQGBIxAgLoEmUBBBgTBlK2ZBMjQULEE4lfE+QTsbzkPBO+vzkME8TfIRDYaAI4LBXQFXgVpBZUFigVDBVMFoAW2BasFfwAxADUWNAsXNQyABILEYf40DBZQsDQMiAYggRGvSTUMSVA1C4AUUFJFUEFSSU5HAAAAAAAAAAAAAAA1DCg0DFCwNBY1FTIGJQg1DjQLNBZQNBVQNA4WUIFRr1AjMgY1AjUBKksBVwB/ZytMV388Zyk0ARY0AhZQZzEZIhJEiAZONANAAAqABBUffHU0BFCwI0MxADUUIzQBEkSIBhk0DCJbNQ00DCRbNROABMe2CtU0DRZQNBMWULA0DYgFfTIGNA4MRDQLSVcAESSvXABcADUOIQeIBXgiNBMyCogFbIAUUEFZSU5HAAAAAAAAAAAAAAAAAAA1Cyg0C1CwMgYlCDUMNBY0FVA0FFA0ExZQNA5QNAwWUIEpr1AhBDIGQv8/IQg0ARJEiAVQNAsXNQyABKeLwgs0DBZQsDQMiAT9MgY0EA9ENBQxABI0FjEAEhE0FTEAEhFENA5JCUk1CyIPRDQONBI0FIgE4jQRNA80CxZcAFwRVwARIls0DQkiD0Q0DTQTNBSIBMMiNBIyCjIJiASzIjQTMgoyCYgEqTEZIQUSRIgFKiIyCjIJiAWwQv7RIzQBEkSIBP80DBc1C4AEl073FzQLFlCwNAuIBG4yBjQOD0RC/8YhBDQBEkSIBHY0Cxc1DYAE1Axs1jQNFlCwNA2IBEcyBjQMDEQ0DlcAEUk1DSJbIwhJNQwhCw5ENA40DTQMFlwAXAA1CyM0E4gFFjQVMQASRIAUU1VNTU9OSU5HAAAAAAAAAAAAAAA1DCg0DFCwMgYlCDUONAtXABEiWzUNNBY0FVA0FFA0ExZQNAtQNA4WUDQNFlCBIa9QIQUyBkL96yEENAESRIgD2DQLFzUNgAT5i694NA0WULA0DYgDqTIGNAwPRDQUMQASNBYxABIRNBUxABIRRCI0EzIKMgmIA5FC/uUhBTQBEkSIBEw0DCJbNQ00DCRbNRKABLNR9480DRZQNBIWULA0DYgDWzIGNA4MRDQLSVcRESSvXABcETUNNBI0ExNEIQeIA1AiNBIyCogDRDQUMQASRDIGJQg1DjQNVwARIls1DDQWNBVQNBRQNBMWUDQSFlA0DVA0DhZQNAwWUIEZr1AhCTIGQv0dIQU0ARJEiAPBNAwXNQuABHDt73o0CxZQsDQLiALbMgY0Dg9ENBQxABI0FjEAEhE0FTEAEhFENA1JCSIPRDQNNBM0FYgCwyI0EzIKMgmIArNC/gchCTQBEkSIAz00Cxc1DIAEcaixozQMFlCwNAyIAogyBjQODEQ0DVcREUk1DCJbIwhJNQshCw5ENA00DDQLFlwAXBE1ESM0EogDVzQUMQASRIAUQ0xBSU1JTkcAAAAAAAAAAAAAAAA1Cyg0C1CwMgYlCDUQNBFXERFJNQ8iWzUONBFXABEiWzUNNBY0FVA0FFA0ExZQNBIWUDQRUDQQFlA0D1A0DhZQNA0WUCEIMgZC/BkhCTQBEkSIAow0Cxc1DYAEL9rpHTQNFlCwNA2IAdcyBjQOD0Q0FDEAEjQWMQASETQVMQASEUQ0DEkJIg9ENAw0EzQViAG/IjQSMgoyCYgBryI0EzIKMgmIAaVC/PkhCDQBEkSIAc00Cxc1DIAEY1dRXDQMFlCwNAyIAXoyBjQQDEQ0FTEAEkQ0DSMSRDQOIxJENA5JCUk1CyIPRDQONBI0FYgBYTQRNA80CxZcAFwRVwARIltJNQxJCSIPRDQMNBM0FIgBQIAUU1VDQ0VTUwAAAAAAAAAAAAAAAAA1C4AEBV2GLDQLULAiNBIyCjIJiAEOIjQTMgoyCYgBBEL8WIgA8CEHiAEDNhoBNQtC+q6IAOA2GgE1DEL7M4gA1TYaATULQvu2iADKNhoBNQxC/DuIAL82GgE1C0L8VogAtDYaATULQvzpiACpNhoBNQxC/SGIAJ42GgE1DEL9oYgAkzYaATULQv3piACINhoBNQtC/o+IAH02GgE1C0L+4SIxNBJEIQQxNRJEIjE2EkQiMTcSRIgAXYG7Aa8iIkL6fDEZIhJEQvqbIrIBIQyyELIUshGyErOJIrIBI7IQsgeyCLOJSIlMCUk1BjIJiAFHiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEiSM1A4lJIhJMNAISEUSJsbIVQv+gsUL/nDQGCDUGiUlXACA1FklXICA1FUlXQCA1FEkhBls1E0lXaCI1DiENWzUMiUlXACA1FklXICA1FUlXQCA1FEkhBls1E0khDls1EklXcCI1EUkhCls1EElXmhE1D0mBqwFbNQ6BswFbNQ2JSVcAIjULSVciIDUWSVdCIDUVgWJbNQ6JNAY0B0oPQf8wQv84SVcAIDUWSVcgIDUVSVdAIDUUSSEGWzUTSSEOWzUSSVdwIjUNSSEKWzUOgZoBWzUMiUlXACA1FklXICA1FUlXQCA1FEkhBls1E0lXaCI1C0khDVs1DiEKWzUNiTEWNAAjCEk1AAlHAzgUMgoSRDgQIQwSRDgRTwISRDgSEkSJsUL+nbGyCUL+lw==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `544`,
    1001: `545`,
    1002: `545`,
    1003: `546`,
    1004: `547`,
    1005: `548`,
    1006: `550`,
    1007: `550`,
    1008: `551`,
    1009: `551`,
    101: `21`,
    1010: `551`,
    1011: `552`,
    1012: `552`,
    1013: `553`,
    1014: `553`,
    1015: `554`,
    1016: `555`,
    1017: `556`,
    1018: `556`,
    1019: `557`,
    102: `21`,
    1020: `557`,
    1021: `558`,
    1022: `559`,
    1023: `559`,
    1024: `560`,
    1025: `560`,
    1026: `561`,
    1027: `562`,
    1028: `563`,
    1029: `563`,
    103: `21`,
    1030: `564`,
    1031: `564`,
    1032: `565`,
    1033: `566`,
    1034: `567`,
    1035: `571`,
    1036: `571`,
    1037: `572`,
    1038: `573`,
    1039: `574`,
    104: `21`,
    1040: `575`,
    1041: `576`,
    1042: `580`,
    1043: `580`,
    1044: `582`,
    1045: `582`,
    1046: `584`,
    1047: `584`,
    1048: `585`,
    1049: `585`,
    105: `21`,
    1050: `585`,
    1051: `587`,
    1052: `588`,
    1053: `588`,
    1054: `589`,
    1055: `589`,
    1056: `590`,
    1057: `590`,
    1058: `591`,
    1059: `591`,
    106: `21`,
    1060: `591`,
    1061: `592`,
    1062: `592`,
    1063: `592`,
    1064: `594`,
    1065: `594`,
    1066: `595`,
    1067: `595`,
    1068: `596`,
    1069: `597`,
    107: `21`,
    1070: `598`,
    1071: `598`,
    1072: `598`,
    1073: `599`,
    1074: `599`,
    1075: `600`,
    1076: `601`,
    1077: `601`,
    1078: `602`,
    1079: `602`,
    108: `21`,
    1080: `602`,
    1081: `602`,
    1082: `602`,
    1083: `602`,
    1084: `603`,
    1085: `603`,
    1086: `604`,
    1087: `605`,
    1088: `606`,
    1089: `608`,
    109: `21`,
    1090: `608`,
    1091: `609`,
    1092: `609`,
    1093: `609`,
    1094: `610`,
    1095: `610`,
    1096: `611`,
    1097: `611`,
    1098: `612`,
    1099: `613`,
    11: `2`,
    110: `21`,
    1100: `614`,
    1101: `614`,
    1102: `615`,
    1103: `615`,
    1104: `615`,
    1105: `616`,
    1106: `617`,
    1107: `617`,
    1108: `618`,
    1109: `619`,
    111: `21`,
    1110: `620`,
    1111: `621`,
    1112: `622`,
    1113: `623`,
    1114: `623`,
    1115: `624`,
    1116: `624`,
    1117: `625`,
    1118: `626`,
    1119: `629`,
    112: `21`,
    1120: `629`,
    1121: `630`,
    1122: `630`,
    1123: `631`,
    1124: `631`,
    1125: `632`,
    1126: `633`,
    1127: `633`,
    1128: `634`,
    1129: `634`,
    113: `21`,
    1130: `635`,
    1131: `635`,
    1132: `636`,
    1133: `637`,
    1134: `637`,
    1135: `638`,
    1136: `638`,
    1137: `638`,
    1138: `641`,
    1139: `641`,
    114: `21`,
    1140: `642`,
    1141: `642`,
    1142: `643`,
    1143: `644`,
    1144: `647`,
    1145: `647`,
    1146: `647`,
    1147: `647`,
    1148: `647`,
    1149: `647`,
    115: `21`,
    1150: `647`,
    1151: `647`,
    1152: `647`,
    1153: `647`,
    1154: `647`,
    1155: `647`,
    1156: `647`,
    1157: `647`,
    1158: `647`,
    1159: `647`,
    116: `21`,
    1160: `647`,
    1161: `647`,
    1162: `647`,
    1163: `647`,
    1164: `647`,
    1165: `647`,
    1166: `648`,
    1167: `648`,
    1168: `649`,
    1169: `650`,
    117: `21`,
    1170: `650`,
    1171: `651`,
    1172: `652`,
    1173: `654`,
    1174: `654`,
    1175: `655`,
    1176: `656`,
    1177: `657`,
    1178: `657`,
    1179: `658`,
    118: `21`,
    1180: `658`,
    1181: `659`,
    1182: `659`,
    1183: `659`,
    1184: `660`,
    1185: `661`,
    1186: `661`,
    1187: `662`,
    1188: `663`,
    1189: `664`,
    119: `21`,
    1190: `664`,
    1191: `665`,
    1192: `665`,
    1193: `666`,
    1194: `666`,
    1195: `666`,
    1196: `667`,
    1197: `668`,
    1198: `669`,
    1199: `669`,
    12: `2`,
    120: `21`,
    1200: `671`,
    1201: `671`,
    1202: `672`,
    1203: `672`,
    1204: `673`,
    1205: `674`,
    1206: `674`,
    1207: `675`,
    1208: `676`,
    1209: `676`,
    121: `22`,
    1210: `677`,
    1211: `678`,
    1212: `679`,
    1213: `679`,
    1214: `680`,
    1215: `681`,
    1216: `682`,
    1217: `682`,
    1218: `683`,
    1219: `684`,
    122: `22`,
    1220: `684`,
    1221: `685`,
    1222: `686`,
    1223: `687`,
    1224: `687`,
    1225: `688`,
    1226: `689`,
    1227: `689`,
    1228: `690`,
    1229: `691`,
    123: `22`,
    1230: `692`,
    1231: `692`,
    1232: `693`,
    1233: `694`,
    1234: `695`,
    1235: `695`,
    1236: `696`,
    1237: `696`,
    1238: `697`,
    1239: `697`,
    124: `23`,
    1240: `697`,
    1241: `699`,
    1242: `699`,
    1243: `700`,
    1244: `700`,
    1245: `701`,
    1246: `702`,
    1247: `703`,
    1248: `703`,
    1249: `703`,
    125: `23`,
    1250: `704`,
    1251: `704`,
    1252: `705`,
    1253: `706`,
    1254: `706`,
    1255: `707`,
    1256: `707`,
    1257: `707`,
    1258: `707`,
    1259: `707`,
    126: `23`,
    1260: `707`,
    1261: `708`,
    1262: `708`,
    1263: `709`,
    1264: `710`,
    1265: `711`,
    1266: `713`,
    1267: `713`,
    1268: `714`,
    1269: `714`,
    127: `23`,
    1270: `714`,
    1271: `715`,
    1272: `715`,
    1273: `716`,
    1274: `716`,
    1275: `717`,
    1276: `718`,
    1277: `719`,
    1278: `719`,
    1279: `720`,
    128: `23`,
    1280: `720`,
    1281: `721`,
    1282: `722`,
    1283: `722`,
    1284: `723`,
    1285: `723`,
    1286: `724`,
    1287: `725`,
    1288: `726`,
    1289: `726`,
    129: `23`,
    1290: `727`,
    1291: `727`,
    1292: `728`,
    1293: `729`,
    1294: `730`,
    1295: `734`,
    1296: `734`,
    1297: `735`,
    1298: `736`,
    1299: `737`,
    13: `2`,
    130: `23`,
    1300: `738`,
    1301: `739`,
    1302: `743`,
    1303: `743`,
    1304: `745`,
    1305: `745`,
    1306: `747`,
    1307: `747`,
    1308: `748`,
    1309: `748`,
    131: `23`,
    1310: `748`,
    1311: `750`,
    1312: `752`,
    1313: `752`,
    1314: `753`,
    1315: `753`,
    1316: `754`,
    1317: `754`,
    1318: `755`,
    1319: `755`,
    132: `23`,
    1320: `755`,
    1321: `756`,
    1322: `757`,
    1323: `757`,
    1324: `758`,
    1325: `758`,
    1326: `759`,
    1327: `759`,
    1328: `760`,
    1329: `760`,
    133: `23`,
    1330: `760`,
    1331: `761`,
    1332: `761`,
    1333: `761`,
    1334: `763`,
    1335: `763`,
    1336: `764`,
    1337: `764`,
    1338: `765`,
    1339: `766`,
    134: `23`,
    1340: `767`,
    1341: `767`,
    1342: `767`,
    1343: `768`,
    1344: `768`,
    1345: `769`,
    1346: `770`,
    1347: `770`,
    1348: `771`,
    1349: `771`,
    135: `23`,
    1350: `771`,
    1351: `771`,
    1352: `771`,
    1353: `771`,
    1354: `772`,
    1355: `772`,
    1356: `773`,
    1357: `774`,
    1358: `775`,
    1359: `777`,
    136: `23`,
    1360: `777`,
    1361: `778`,
    1362: `778`,
    1363: `778`,
    1364: `779`,
    1365: `779`,
    1366: `780`,
    1367: `780`,
    1368: `781`,
    1369: `782`,
    137: `23`,
    1370: `783`,
    1371: `783`,
    1372: `784`,
    1373: `784`,
    1374: `785`,
    1375: `786`,
    1376: `789`,
    1377: `789`,
    1378: `790`,
    1379: `791`,
    138: `23`,
    1380: `792`,
    1381: `796`,
    1382: `796`,
    1383: `797`,
    1384: `798`,
    1385: `799`,
    1386: `803`,
    1387: `803`,
    1388: `804`,
    1389: `805`,
    139: `23`,
    1390: `806`,
    1391: `807`,
    1392: `807`,
    1393: `808`,
    1394: `809`,
    1395: `810`,
    1396: `813`,
    1397: `813`,
    1398: `815`,
    1399: `815`,
    14: `2`,
    140: `23`,
    1400: `817`,
    1401: `817`,
    1402: `818`,
    1403: `818`,
    1404: `818`,
    1405: `819`,
    1406: `819`,
    1407: `820`,
    1408: `820`,
    1409: `821`,
    141: `23`,
    1410: `821`,
    1411: `822`,
    1412: `823`,
    1413: `823`,
    1414: `824`,
    1415: `824`,
    1416: `825`,
    1417: `825`,
    1418: `825`,
    1419: `826`,
    142: `23`,
    1420: `827`,
    1421: `828`,
    1422: `829`,
    1423: `829`,
    1424: `830`,
    1425: `831`,
    1426: `832`,
    1427: `833`,
    1428: `834`,
    1429: `837`,
    143: `23`,
    1430: `837`,
    1431: `839`,
    1432: `839`,
    1433: `841`,
    1434: `841`,
    1435: `842`,
    1436: `842`,
    1437: `842`,
    1438: `843`,
    1439: `843`,
    144: `23`,
    1440: `843`,
    1441: `843`,
    1442: `843`,
    1443: `843`,
    1444: `843`,
    1445: `843`,
    1446: `843`,
    1447: `843`,
    1448: `843`,
    1449: `843`,
    145: `23`,
    1450: `843`,
    1451: `843`,
    1452: `843`,
    1453: `843`,
    1454: `843`,
    1455: `843`,
    1456: `843`,
    1457: `843`,
    1458: `843`,
    1459: `843`,
    146: `23`,
    1460: `844`,
    1461: `844`,
    1462: `845`,
    1463: `845`,
    1464: `845`,
    1465: `845`,
    1466: `845`,
    1467: `845`,
    1468: `846`,
    1469: `846`,
    147: `23`,
    1470: `847`,
    1471: `848`,
    1472: `851`,
    1473: `852`,
    1474: `852`,
    1475: `853`,
    1476: `853`,
    1477: `854`,
    1478: `854`,
    1479: `855`,
    148: `25`,
    1480: `855`,
    1481: `855`,
    1482: `856`,
    1483: `857`,
    1484: `857`,
    1485: `858`,
    1486: `858`,
    1487: `859`,
    1488: `859`,
    1489: `860`,
    149: `27`,
    1490: `860`,
    1491: `860`,
    1492: `861`,
    1493: `861`,
    1494: `861`,
    1495: `863`,
    1496: `863`,
    1497: `863`,
    1498: `864`,
    1499: `864`,
    15: `2`,
    150: `27`,
    1500: `865`,
    1501: `865`,
    1502: `865`,
    1503: `866`,
    1504: `866`,
    1505: `866`,
    1506: `867`,
    1507: `867`,
    1508: `868`,
    1509: `868`,
    151: `28`,
    1510: `868`,
    1511: `870`,
    1512: `870`,
    1513: `870`,
    1514: `871`,
    1515: `871`,
    1516: `871`,
    1517: `872`,
    1518: `872`,
    1519: `873`,
    152: `28`,
    1520: `873`,
    1521: `873`,
    1522: `875`,
    1523: `875`,
    1524: `875`,
    1525: `876`,
    1526: `876`,
    1527: `876`,
    1528: `877`,
    1529: `877`,
    153: `29`,
    1530: `878`,
    1531: `878`,
    1532: `878`,
    1533: `880`,
    1534: `880`,
    1535: `880`,
    1536: `881`,
    1537: `881`,
    1538: `881`,
    1539: `882`,
    154: `29`,
    1540: `882`,
    1541: `883`,
    1542: `883`,
    1543: `883`,
    1544: `885`,
    1545: `885`,
    1546: `885`,
    1547: `886`,
    1548: `886`,
    1549: `886`,
    155: `30`,
    1550: `887`,
    1551: `887`,
    1552: `888`,
    1553: `888`,
    1554: `888`,
    1555: `890`,
    1556: `890`,
    1557: `890`,
    1558: `891`,
    1559: `891`,
    156: `31`,
    1560: `891`,
    1561: `892`,
    1562: `892`,
    1563: `893`,
    1564: `893`,
    1565: `893`,
    1566: `895`,
    1567: `895`,
    1568: `895`,
    1569: `896`,
    157: `31`,
    1570: `896`,
    1571: `896`,
    1572: `897`,
    1573: `897`,
    1574: `898`,
    1575: `898`,
    1576: `898`,
    1577: `900`,
    1578: `900`,
    1579: `900`,
    158: `32`,
    1580: `901`,
    1581: `901`,
    1582: `901`,
    1583: `902`,
    1584: `902`,
    1585: `903`,
    1586: `903`,
    1587: `903`,
    1588: `905`,
    1589: `905`,
    159: `32`,
    1590: `905`,
    1591: `906`,
    1592: `906`,
    1593: `906`,
    1594: `907`,
    1595: `907`,
    1596: `908`,
    1597: `908`,
    1598: `908`,
    1599: `910`,
    16: `2`,
    160: `32`,
    1600: `910`,
    1601: `910`,
    1602: `911`,
    1603: `911`,
    1604: `911`,
    1605: `912`,
    1606: `912`,
    1607: `913`,
    1608: `913`,
    1609: `913`,
    161: `32`,
    1610: `915`,
    1611: `915`,
    1612: `915`,
    1613: `916`,
    1614: `916`,
    1615: `916`,
    1616: `917`,
    1617: `917`,
    1618: `918`,
    1619: `918`,
    162: `32`,
    1620: `918`,
    1621: `920`,
    1622: `921`,
    1623: `921`,
    1624: `922`,
    1625: `923`,
    1626: `924`,
    1627: `924`,
    1628: `925`,
    1629: `925`,
    163: `32`,
    1630: `926`,
    1631: `927`,
    1632: `928`,
    1633: `929`,
    1634: `929`,
    1635: `930`,
    1636: `931`,
    1637: `932`,
    1638: `933`,
    1639: `933`,
    164: `33`,
    1640: `934`,
    1641: `935`,
    1642: `936`,
    1643: `936`,
    1644: `936`,
    1645: `937`,
    1646: `937`,
    1647: `937`,
    1648: `938`,
    1649: `939`,
    165: `33`,
    1650: `940`,
    1651: `941`,
    1652: `941`,
    1653: `941`,
    1654: `943`,
    1655: `943`,
    1656: `944`,
    1657: `945`,
    1658: `946`,
    1659: `948`,
    166: `34`,
    1660: `948`,
    1661: `948`,
    1662: `950`,
    1663: `951`,
    1664: `951`,
    1665: `952`,
    1666: `952`,
    1667: `953`,
    1668: `953`,
    1669: `954`,
    167: `35`,
    1670: `954`,
    1671: `955`,
    1672: `955`,
    1673: `956`,
    1674: `956`,
    1675: `957`,
    1676: `958`,
    1677: `960`,
    1678: `961`,
    1679: `961`,
    168: `36`,
    1680: `962`,
    1681: `963`,
    1682: `963`,
    1683: `964`,
    1684: `964`,
    1685: `965`,
    1686: `965`,
    1687: `966`,
    1688: `967`,
    1689: `969`,
    169: `38`,
    1690: `970`,
    1691: `972`,
    1692: `973`,
    1693: `974`,
    1694: `975`,
    1695: `975`,
    1696: `976`,
    1697: `976`,
    1698: `977`,
    1699: `977`,
    17: `2`,
    170: `38`,
    1700: `977`,
    1701: `978`,
    1702: `980`,
    1703: `981`,
    1704: `982`,
    1705: `982`,
    1706: `982`,
    1707: `983`,
    1708: `984`,
    1709: `984`,
    171: `39`,
    1710: `987`,
    1711: `987`,
    1712: `988`,
    1713: `988`,
    1714: `989`,
    1715: `990`,
    1716: `991`,
    1717: `992`,
    1718: `992`,
    1719: `993`,
    172: `39`,
    1720: `994`,
    1721: `994`,
    1722: `995`,
    1723: `995`,
    1724: `996`,
    1725: `996`,
    1726: `997`,
    1727: `998`,
    1728: `999`,
    1729: `999`,
    173: `39`,
    1730: `1000`,
    1731: `1001`,
    1732: `1002`,
    1733: `1003`,
    1734: `1003`,
    1735: `1004`,
    1736: `1005`,
    1737: `1006`,
    1738: `1008`,
    1739: `1009`,
    174: `40`,
    1740: `1009`,
    1741: `1010`,
    1742: `1012`,
    1743: `1013`,
    1744: `1014`,
    1745: `1015`,
    1746: `1016`,
    1747: `1016`,
    1748: `1017`,
    1749: `1018`,
    175: `40`,
    1750: `1019`,
    1751: `1020`,
    1752: `1022`,
    1753: `1023`,
    1754: `1023`,
    1755: `1024`,
    1756: `1024`,
    1757: `1024`,
    1758: `1026`,
    1759: `1027`,
    176: `41`,
    1760: `1027`,
    1761: `1027`,
    1762: `1029`,
    1763: `1029`,
    1764: `1030`,
    1765: `1031`,
    1766: `1031`,
    1767: `1032`,
    1768: `1034`,
    1769: `1035`,
    177: `42`,
    1770: `1035`,
    1771: `1035`,
    1772: `1036`,
    1773: `1036`,
    1774: `1037`,
    1775: `1038`,
    1776: `1038`,
    1777: `1038`,
    1778: `1039`,
    1779: `1039`,
    178: `43`,
    1780: `1040`,
    1781: `1041`,
    1782: `1041`,
    1783: `1041`,
    1784: `1042`,
    1785: `1042`,
    1786: `1043`,
    1787: `1044`,
    1788: `1044`,
    1789: `1045`,
    179: `43`,
    1790: `1046`,
    1791: `1046`,
    1792: `1047`,
    1793: `1048`,
    1794: `1048`,
    1795: `1048`,
    1796: `1049`,
    1797: `1049`,
    1798: `1050`,
    1799: `1050`,
    18: `2`,
    180: `44`,
    1800: `1051`,
    1801: `1052`,
    1802: `1052`,
    1803: `1053`,
    1804: `1055`,
    1805: `1056`,
    1806: `1056`,
    1807: `1056`,
    1808: `1057`,
    1809: `1057`,
    181: `45`,
    1810: `1058`,
    1811: `1059`,
    1812: `1059`,
    1813: `1059`,
    1814: `1060`,
    1815: `1060`,
    1816: `1061`,
    1817: `1062`,
    1818: `1062`,
    1819: `1062`,
    182: `46`,
    1820: `1063`,
    1821: `1063`,
    1822: `1064`,
    1823: `1065`,
    1824: `1065`,
    1825: `1066`,
    1826: `1067`,
    1827: `1067`,
    1828: `1068`,
    1829: `1069`,
    183: `46`,
    1830: `1069`,
    1831: `1070`,
    1832: `1071`,
    1833: `1071`,
    1834: `1072`,
    1835: `1073`,
    1836: `1073`,
    1837: `1073`,
    1838: `1074`,
    1839: `1074`,
    184: `47`,
    1840: `1075`,
    1841: `1076`,
    1842: `1076`,
    1843: `1077`,
    1844: `1078`,
    1845: `1078`,
    1846: `1079`,
    1847: `1080`,
    1848: `1080`,
    1849: `1080`,
    185: `47`,
    1850: `1081`,
    1851: `1081`,
    1852: `1082`,
    1853: `1083`,
    1854: `1083`,
    1855: `1083`,
    1856: `1084`,
    1857: `1085`,
    1858: `1085`,
    1859: `1086`,
    186: `47`,
    1860: `1086`,
    1861: `1086`,
    1862: `1087`,
    1863: `1088`,
    1864: `1088`,
    1865: `1089`,
    1866: `1091`,
    1867: `1092`,
    1868: `1092`,
    1869: `1092`,
    187: `47`,
    1870: `1093`,
    1871: `1093`,
    1872: `1094`,
    1873: `1095`,
    1874: `1095`,
    1875: `1095`,
    1876: `1096`,
    1877: `1096`,
    1878: `1097`,
    1879: `1098`,
    188: `47`,
    1880: `1098`,
    1881: `1098`,
    1882: `1099`,
    1883: `1099`,
    1884: `1100`,
    1885: `1100`,
    1886: `1101`,
    1887: `1102`,
    1888: `1102`,
    1889: `1103`,
    189: `47`,
    1890: `1105`,
    1891: `1105`,
    1892: `1106`,
    1893: `1106`,
    1894: `1107`,
    1895: `1108`,
    1896: `1109`,
    1897: `1109`,
    1898: `1109`,
    1899: `1110`,
    19: `2`,
    190: `47`,
    1900: `1110`,
    1901: `1110`,
    1902: `1112`,
    1903: `1113`,
    1904: `1113`,
    1905: `1113`,
    1906: `1114`,
    1907: `1114`,
    1908: `1115`,
    1909: `1116`,
    191: `47`,
    1910: `1116`,
    1911: `1116`,
    1912: `1117`,
    1913: `1117`,
    1914: `1118`,
    1915: `1119`,
    1916: `1119`,
    1917: `1119`,
    1918: `1120`,
    1919: `1120`,
    192: `47`,
    1920: `1121`,
    1921: `1122`,
    1922: `1122`,
    1923: `1123`,
    1924: `1124`,
    1925: `1124`,
    1926: `1125`,
    1927: `1126`,
    1928: `1126`,
    1929: `1127`,
    193: `47`,
    1930: `1128`,
    1931: `1128`,
    1932: `1129`,
    1933: `1130`,
    1934: `1130`,
    1935: `1130`,
    1936: `1131`,
    1937: `1131`,
    1938: `1132`,
    1939: `1133`,
    194: `47`,
    1940: `1133`,
    1941: `1134`,
    1942: `1135`,
    1943: `1135`,
    1944: `1136`,
    1945: `1136`,
    1946: `1136`,
    1947: `1137`,
    1948: `1138`,
    1949: `1138`,
    195: `47`,
    1950: `1139`,
    1951: `1141`,
    1952: `1142`,
    1953: `1142`,
    1954: `1142`,
    1955: `1143`,
    1956: `1143`,
    1957: `1144`,
    1958: `1145`,
    1959: `1145`,
    196: `47`,
    1960: `1145`,
    1961: `1146`,
    1962: `1146`,
    1963: `1147`,
    1964: `1148`,
    1965: `1148`,
    1966: `1148`,
    1967: `1149`,
    1968: `1149`,
    1969: `1150`,
    197: `47`,
    1970: `1151`,
    1971: `1151`,
    1972: `1152`,
    1973: `1153`,
    1974: `1153`,
    1975: `1154`,
    1976: `1155`,
    1977: `1155`,
    1978: `1155`,
    1979: `1156`,
    198: `47`,
    1980: `1156`,
    1981: `1157`,
    1982: `1158`,
    1983: `1158`,
    1984: `1159`,
    1985: `1160`,
    1986: `1160`,
    1987: `1161`,
    1988: `1161`,
    1989: `1162`,
    199: `47`,
    1990: `1163`,
    1991: `1163`,
    1992: `1164`,
    1993: `1167`,
    1994: `1167`,
    1995: `1168`,
    1996: `1168`,
    1997: `1169`,
    1998: `1170`,
    1999: `1171`,
    2: `2`,
    20: `2`,
    200: `47`,
    2000: `1172`,
    2001: `1172`,
    2002: `1173`,
    2003: `1174`,
    2004: `1174`,
    2005: `1175`,
    2006: `1175`,
    2007: `1176`,
    2008: `1176`,
    2009: `1177`,
    201: `47`,
    2010: `1178`,
    2011: `1179`,
    2012: `1179`,
    2013: `1180`,
    2014: `1180`,
    2015: `1181`,
    2016: `1182`,
    2017: `1183`,
    2018: `1183`,
    2019: `1184`,
    202: `47`,
    2020: `1184`,
    2021: `1185`,
    2022: `1186`,
    2023: `1187`,
    2024: `1187`,
    2025: `1188`,
    2026: `1189`,
    2027: `1190`,
    2028: `1192`,
    2029: `1193`,
    203: `47`,
    2030: `1193`,
    2031: `1193`,
    2032: `1195`,
    2033: `1196`,
    2034: `1196`,
    2035: `1197`,
    204: `47`,
    205: `47`,
    206: `48`,
    207: `48`,
    208: `49`,
    209: `50`,
    21: `2`,
    210: `50`,
    211: `51`,
    212: `52`,
    213: `54`,
    214: `54`,
    215: `55`,
    216: `55`,
    217: `56`,
    218: `56`,
    219: `57`,
    22: `2`,
    220: `58`,
    221: `59`,
    222: `59`,
    223: `61`,
    224: `61`,
    225: `62`,
    226: `62`,
    227: `63`,
    228: `64`,
    229: `64`,
    23: `2`,
    230: `65`,
    231: `66`,
    232: `66`,
    233: `67`,
    234: `68`,
    235: `69`,
    236: `69`,
    237: `70`,
    238: `71`,
    239: `72`,
    24: `2`,
    240: `73`,
    241: `73`,
    242: `75`,
    243: `75`,
    244: `76`,
    245: `76`,
    246: `77`,
    247: `78`,
    248: `78`,
    249: `79`,
    25: `2`,
    250: `79`,
    251: `79`,
    252: `80`,
    253: `81`,
    254: `82`,
    255: `83`,
    256: `83`,
    257: `83`,
    258: `84`,
    259: `85`,
    26: `2`,
    260: `86`,
    261: `86`,
    262: `87`,
    263: `88`,
    264: `88`,
    265: `89`,
    266: `90`,
    267: `91`,
    268: `92`,
    269: `92`,
    27: `2`,
    270: `93`,
    271: `94`,
    272: `95`,
    273: `97`,
    274: `97`,
    275: `97`,
    276: `99`,
    277: `99`,
    278: `100`,
    279: `100`,
    28: `2`,
    280: `100`,
    281: `102`,
    282: `102`,
    283: `102`,
    284: `102`,
    285: `102`,
    286: `102`,
    287: `103`,
    288: `103`,
    289: `104`,
    29: `2`,
    290: `105`,
    291: `107`,
    292: `108`,
    293: `110`,
    294: `110`,
    295: `111`,
    296: `111`,
    297: `112`,
    298: `113`,
    299: `113`,
    3: `2`,
    30: `2`,
    300: `114`,
    301: `115`,
    302: `116`,
    303: `116`,
    304: `116`,
    305: `117`,
    306: `117`,
    307: `118`,
    308: `119`,
    309: `120`,
    31: `2`,
    310: `120`,
    311: `121`,
    312: `121`,
    313: `122`,
    314: `123`,
    315: `124`,
    316: `124`,
    317: `125`,
    318: `125`,
    319: `125`,
    32: `2`,
    320: `125`,
    321: `125`,
    322: `125`,
    323: `126`,
    324: `126`,
    325: `127`,
    326: `128`,
    327: `129`,
    328: `129`,
    329: `130`,
    33: `2`,
    330: `131`,
    331: `132`,
    332: `134`,
    333: `134`,
    334: `135`,
    335: `135`,
    336: `135`,
    337: `136`,
    338: `136`,
    339: `137`,
    34: `2`,
    340: `137`,
    341: `138`,
    342: `139`,
    343: `140`,
    344: `140`,
    345: `141`,
    346: `142`,
    347: `142`,
    348: `142`,
    349: `143`,
    35: `2`,
    350: `144`,
    351: `145`,
    352: `145`,
    353: `146`,
    354: `146`,
    355: `147`,
    356: `147`,
    357: `148`,
    358: `148`,
    359: `149`,
    36: `2`,
    360: `149`,
    361: `149`,
    362: `150`,
    363: `152`,
    364: `152`,
    365: `153`,
    366: `153`,
    367: `154`,
    368: `154`,
    369: `154`,
    37: `2`,
    370: `155`,
    371: `155`,
    372: `155`,
    373: `155`,
    374: `155`,
    375: `155`,
    376: `155`,
    377: `155`,
    378: `155`,
    379: `155`,
    38: `2`,
    380: `155`,
    381: `155`,
    382: `155`,
    383: `155`,
    384: `155`,
    385: `155`,
    386: `155`,
    387: `155`,
    388: `155`,
    389: `155`,
    39: `2`,
    390: `155`,
    391: `155`,
    392: `156`,
    393: `156`,
    394: `157`,
    395: `158`,
    396: `158`,
    397: `159`,
    398: `160`,
    399: `162`,
    4: `2`,
    40: `2`,
    400: `162`,
    401: `163`,
    402: `164`,
    403: `165`,
    404: `165`,
    405: `167`,
    406: `167`,
    407: `168`,
    408: `168`,
    409: `169`,
    41: `2`,
    410: `170`,
    411: `170`,
    412: `171`,
    413: `172`,
    414: `172`,
    415: `173`,
    416: `174`,
    417: `175`,
    418: `175`,
    419: `176`,
    42: `2`,
    420: `177`,
    421: `177`,
    422: `178`,
    423: `179`,
    424: `180`,
    425: `180`,
    426: `181`,
    427: `182`,
    428: `183`,
    429: `183`,
    43: `4`,
    430: `184`,
    431: `184`,
    432: `185`,
    433: `185`,
    434: `185`,
    435: `187`,
    436: `187`,
    437: `188`,
    438: `188`,
    439: `189`,
    44: `4`,
    440: `190`,
    441: `191`,
    442: `191`,
    443: `191`,
    444: `192`,
    445: `192`,
    446: `193`,
    447: `194`,
    448: `194`,
    449: `195`,
    45: `5`,
    450: `195`,
    451: `195`,
    452: `195`,
    453: `195`,
    454: `195`,
    455: `196`,
    456: `196`,
    457: `197`,
    458: `198`,
    459: `199`,
    46: `5`,
    460: `201`,
    461: `201`,
    462: `202`,
    463: `202`,
    464: `202`,
    465: `203`,
    466: `203`,
    467: `204`,
    468: `204`,
    469: `205`,
    47: `5`,
    470: `206`,
    471: `207`,
    472: `207`,
    473: `208`,
    474: `208`,
    475: `209`,
    476: `210`,
    477: `210`,
    478: `211`,
    479: `211`,
    48: `6`,
    480: `212`,
    481: `213`,
    482: `214`,
    483: `214`,
    484: `215`,
    485: `215`,
    486: `216`,
    487: `217`,
    488: `218`,
    489: `222`,
    49: `7`,
    490: `222`,
    491: `223`,
    492: `224`,
    493: `225`,
    494: `226`,
    495: `226`,
    496: `227`,
    497: `228`,
    498: `229`,
    499: `233`,
    5: `2`,
    50: `8`,
    500: `233`,
    501: `235`,
    502: `235`,
    503: `237`,
    504: `237`,
    505: `238`,
    506: `238`,
    507: `238`,
    508: `239`,
    509: `239`,
    51: `9`,
    510: `240`,
    511: `240`,
    512: `241`,
    513: `241`,
    514: `242`,
    515: `243`,
    516: `243`,
    517: `244`,
    518: `244`,
    519: `245`,
    52: `10`,
    520: `245`,
    521: `245`,
    522: `246`,
    523: `247`,
    524: `248`,
    525: `248`,
    526: `249`,
    527: `250`,
    528: `251`,
    529: `252`,
    53: `11`,
    530: `256`,
    531: `256`,
    532: `258`,
    533: `258`,
    534: `259`,
    535: `259`,
    536: `260`,
    537: `260`,
    538: `260`,
    539: `262`,
    54: `11`,
    540: `263`,
    541: `263`,
    542: `264`,
    543: `264`,
    544: `265`,
    545: `265`,
    546: `266`,
    547: `266`,
    548: `266`,
    549: `267`,
    55: `12`,
    550: `268`,
    551: `268`,
    552: `269`,
    553: `269`,
    554: `270`,
    555: `270`,
    556: `271`,
    557: `271`,
    558: `271`,
    559: `273`,
    56: `13`,
    560: `273`,
    561: `274`,
    562: `274`,
    563: `275`,
    564: `276`,
    565: `278`,
    566: `278`,
    567: `278`,
    568: `280`,
    569: `281`,
    57: `14`,
    570: `281`,
    571: `282`,
    572: `282`,
    573: `283`,
    574: `283`,
    575: `283`,
    576: `284`,
    577: `284`,
    578: `284`,
    579: `286`,
    58: `14`,
    580: `287`,
    581: `287`,
    582: `288`,
    583: `289`,
    584: `290`,
    585: `290`,
    586: `290`,
    587: `291`,
    588: `291`,
    589: `292`,
    59: `15`,
    590: `293`,
    591: `293`,
    592: `294`,
    593: `294`,
    594: `294`,
    595: `294`,
    596: `294`,
    597: `294`,
    598: `295`,
    599: `295`,
    6: `2`,
    60: `16`,
    600: `296`,
    601: `297`,
    602: `298`,
    603: `300`,
    604: `300`,
    605: `301`,
    606: `301`,
    607: `301`,
    608: `302`,
    609: `302`,
    61: `17`,
    610: `303`,
    611: `303`,
    612: `304`,
    613: `305`,
    614: `306`,
    615: `306`,
    616: `306`,
    617: `308`,
    618: `308`,
    619: `309`,
    62: `18`,
    620: `309`,
    621: `310`,
    622: `311`,
    623: `312`,
    624: `312`,
    625: `312`,
    626: `313`,
    627: `313`,
    628: `314`,
    629: `315`,
    63: `19`,
    630: `315`,
    631: `316`,
    632: `316`,
    633: `316`,
    634: `316`,
    635: `316`,
    636: `316`,
    637: `317`,
    638: `317`,
    639: `318`,
    64: `21`,
    640: `319`,
    641: `320`,
    642: `322`,
    643: `322`,
    644: `323`,
    645: `323`,
    646: `323`,
    647: `324`,
    648: `324`,
    649: `325`,
    65: `21`,
    650: `325`,
    651: `326`,
    652: `327`,
    653: `328`,
    654: `328`,
    655: `329`,
    656: `329`,
    657: `329`,
    658: `330`,
    659: `331`,
    66: `21`,
    660: `331`,
    661: `332`,
    662: `333`,
    663: `334`,
    664: `335`,
    665: `336`,
    666: `337`,
    667: `337`,
    668: `338`,
    669: `338`,
    67: `21`,
    670: `339`,
    671: `340`,
    672: `343`,
    673: `343`,
    674: `344`,
    675: `344`,
    676: `345`,
    677: `345`,
    678: `346`,
    679: `347`,
    68: `21`,
    680: `347`,
    681: `348`,
    682: `348`,
    683: `349`,
    684: `349`,
    685: `350`,
    686: `351`,
    687: `351`,
    688: `352`,
    689: `352`,
    69: `21`,
    690: `352`,
    691: `355`,
    692: `355`,
    693: `356`,
    694: `356`,
    695: `357`,
    696: `358`,
    697: `361`,
    698: `361`,
    699: `361`,
    7: `2`,
    70: `21`,
    700: `361`,
    701: `361`,
    702: `361`,
    703: `361`,
    704: `361`,
    705: `361`,
    706: `361`,
    707: `361`,
    708: `361`,
    709: `361`,
    71: `21`,
    710: `361`,
    711: `361`,
    712: `361`,
    713: `361`,
    714: `361`,
    715: `361`,
    716: `361`,
    717: `361`,
    718: `361`,
    719: `362`,
    72: `21`,
    720: `362`,
    721: `363`,
    722: `364`,
    723: `364`,
    724: `365`,
    725: `366`,
    726: `368`,
    727: `368`,
    728: `369`,
    729: `370`,
    73: `21`,
    730: `371`,
    731: `371`,
    732: `372`,
    733: `372`,
    734: `373`,
    735: `373`,
    736: `373`,
    737: `374`,
    738: `375`,
    739: `376`,
    74: `21`,
    740: `376`,
    741: `378`,
    742: `378`,
    743: `379`,
    744: `379`,
    745: `380`,
    746: `381`,
    747: `381`,
    748: `382`,
    749: `383`,
    75: `21`,
    750: `383`,
    751: `384`,
    752: `385`,
    753: `386`,
    754: `386`,
    755: `387`,
    756: `388`,
    757: `388`,
    758: `389`,
    759: `390`,
    76: `21`,
    760: `391`,
    761: `391`,
    762: `392`,
    763: `393`,
    764: `394`,
    765: `394`,
    766: `395`,
    767: `396`,
    768: `397`,
    769: `397`,
    77: `21`,
    770: `398`,
    771: `398`,
    772: `399`,
    773: `399`,
    774: `399`,
    775: `401`,
    776: `401`,
    777: `402`,
    778: `402`,
    779: `403`,
    78: `21`,
    780: `404`,
    781: `405`,
    782: `405`,
    783: `405`,
    784: `406`,
    785: `406`,
    786: `407`,
    787: `408`,
    788: `408`,
    789: `409`,
    79: `21`,
    790: `409`,
    791: `409`,
    792: `409`,
    793: `409`,
    794: `409`,
    795: `410`,
    796: `410`,
    797: `411`,
    798: `412`,
    799: `413`,
    8: `2`,
    80: `21`,
    800: `415`,
    801: `415`,
    802: `416`,
    803: `416`,
    804: `416`,
    805: `417`,
    806: `417`,
    807: `418`,
    808: `418`,
    809: `419`,
    81: `21`,
    810: `420`,
    811: `421`,
    812: `421`,
    813: `422`,
    814: `422`,
    815: `423`,
    816: `424`,
    817: `424`,
    818: `425`,
    819: `425`,
    82: `21`,
    820: `426`,
    821: `427`,
    822: `428`,
    823: `428`,
    824: `429`,
    825: `429`,
    826: `430`,
    827: `431`,
    828: `432`,
    829: `437`,
    83: `21`,
    830: `439`,
    831: `439`,
    832: `440`,
    833: `440`,
    834: `441`,
    835: `441`,
    836: `442`,
    837: `442`,
    838: `442`,
    839: `443`,
    84: `21`,
    840: `443`,
    841: `443`,
    842: `445`,
    843: `445`,
    844: `446`,
    845: `446`,
    846: `447`,
    847: `448`,
    848: `449`,
    849: `449`,
    85: `21`,
    850: `449`,
    851: `450`,
    852: `450`,
    853: `451`,
    854: `452`,
    855: `453`,
    856: `453`,
    857: `454`,
    858: `454`,
    859: `455`,
    86: `21`,
    860: `456`,
    861: `457`,
    862: `457`,
    863: `458`,
    864: `458`,
    865: `458`,
    866: `458`,
    867: `458`,
    868: `458`,
    869: `459`,
    87: `21`,
    870: `459`,
    871: `460`,
    872: `461`,
    873: `462`,
    874: `462`,
    875: `463`,
    876: `464`,
    877: `465`,
    878: `467`,
    879: `467`,
    88: `21`,
    880: `468`,
    881: `468`,
    882: `468`,
    883: `469`,
    884: `469`,
    885: `470`,
    886: `470`,
    887: `471`,
    888: `472`,
    889: `473`,
    89: `21`,
    890: `473`,
    891: `474`,
    892: `475`,
    893: `475`,
    894: `475`,
    895: `476`,
    896: `477`,
    897: `478`,
    898: `478`,
    899: `479`,
    9: `2`,
    90: `21`,
    900: `479`,
    901: `480`,
    902: `480`,
    903: `481`,
    904: `481`,
    905: `482`,
    906: `482`,
    907: `483`,
    908: `484`,
    909: `487`,
    91: `21`,
    910: `487`,
    911: `488`,
    912: `488`,
    913: `488`,
    914: `489`,
    915: `491`,
    916: `491`,
    917: `492`,
    918: `492`,
    919: `493`,
    92: `21`,
    920: `493`,
    921: `493`,
    922: `494`,
    923: `494`,
    924: `495`,
    925: `495`,
    926: `496`,
    927: `497`,
    928: `500`,
    929: `500`,
    93: `21`,
    930: `501`,
    931: `502`,
    932: `503`,
    933: `503`,
    934: `504`,
    935: `504`,
    936: `505`,
    937: `505`,
    938: `505`,
    939: `506`,
    94: `21`,
    940: `507`,
    941: `508`,
    942: `508`,
    943: `510`,
    944: `510`,
    945: `511`,
    946: `511`,
    947: `512`,
    948: `513`,
    949: `513`,
    95: `21`,
    950: `514`,
    951: `515`,
    952: `515`,
    953: `516`,
    954: `517`,
    955: `518`,
    956: `518`,
    957: `519`,
    958: `520`,
    959: `521`,
    96: `21`,
    960: `521`,
    961: `522`,
    962: `523`,
    963: `523`,
    964: `524`,
    965: `525`,
    966: `526`,
    967: `526`,
    968: `527`,
    969: `528`,
    97: `21`,
    970: `529`,
    971: `529`,
    972: `530`,
    973: `531`,
    974: `532`,
    975: `532`,
    976: `533`,
    977: `533`,
    978: `534`,
    979: `534`,
    98: `21`,
    980: `534`,
    981: `536`,
    982: `536`,
    983: `537`,
    984: `537`,
    985: `538`,
    986: `539`,
    987: `540`,
    988: `540`,
    989: `540`,
    99: `21`,
    990: `541`,
    991: `541`,
    992: `542`,
    993: `543`,
    994: `543`,
    995: `544`,
    996: `544`,
    997: `544`,
    998: `544`,
    999: `544`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 2,
  stateSize: 187,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1376","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e10","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"result","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"}],"name":"status","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"v1379","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1406","type":"tuple"}],"name":"_reachp_10","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1382","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1385","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1388","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T4","name":"v1391","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1394","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1397","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1400","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T0","name":"v1403","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200301590813803601f1980601f83011683019360018060401b039284861084871117620003ec5780859260409788528339602094859181010312620003e7578451906200004f8262000402565b518152436003558451620000638162000402565b600080915285519462000076866200041e565b620000806200043a565b865280860192620000906200046a565b84528787019383855260609485890198858a5260049360ff855416620003d0577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde878c8051338152835189820152a1518015908115620003c3575b5015620003ac5785815152858582510152858b825101528051835152518483510152346200039557977fcb3acff3f437da359b4895d90b35b26b1a24e01a528ab6f7049fae3b3157a34f8480979a68505245504152494e4760b81b8091528c51908152a13381528951906200015f826200041e565b620001696200046a565b8252848201908682528b8301918783528b8401948886525180945233815260018060a01b0393848093511684526014430186528d60019d8e808c554381558a83519d8e018d945b60028610620003605750505050505050511660e0880152511661010086015251610120908186015284526101408401848110878211176200034d57885283519586116200033a57600254908782811c921680156200032f575b838310146200031c5750601f8111620002d0575b508093601f861160011462000268575050918394918493946200025c575b50501b916000199060031b1c1916176002555b51612b639081620004b28239f35b0151925038806200023b565b600283528183209493928692918316915b88838310620002b557505050106200029b575b505050811b016002556200024e565b015160001960f88460031b161c191690553880806200028c565b85870151885590960195948501948793509081019062000279565b60028352818320601f870160051c81019183881062000311575b601f0160051c019087905b828110620003055750506200021d565b848155018790620002f5565b9091508190620002ea565b634e487b7160e01b845260229052602483fd5b91607f169162000209565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8697985080859697959394955180518452858101518685015201511515908201520194019201908f8f908896958c91620001b0565b895163100960cb60e01b8152600981850152602490fd5b8a5163100960cb60e01b8152600881860152602490fd5b90506001541438620000ea565b8b5163100960cb60e01b8152600781870152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117620003ec57604052565b608081019081106001600160401b03821117620003ec57604052565b60405190606082016001600160401b03811183821017620003ec5760405260006040838281528260208201520152565b6040805191908281016001600160401b03811184821017620003ec5781528260005b8281106200049957505050565b602090620004a66200043a565b81840152016200048c56fe60806040526004361015610018575b361561001657005b005b60003560e01c806306a723031461011c578063184f7aa4146101135780631e93b0f11461010a5780632e928421146101015780632f132302146100f857806341712c0a146100ef57806383230757146100e6578063ab53f2c6146100dd578063b3722a99146100d4578063bd184e9a146100cb578063d3c64a7a146100c2578063e249db95146100b95763f5a239bc0361000e576100b46112eb565b61000e565b506100b46110d1565b506100b4610f9e565b506100b4610ddd565b506100b4610b77565b506100b4610b02565b506100b4610ae3565b506100b46108b3565b506100b4610628565b506100b46104e6565b506100b46104c7565b506100b46102ce565b506100b461013b565b602090600319011261013657600490565b600080fd5b5061014536610125565b61025e6101646040519261015884611411565b600080945236906122db565b6101716007845414611a47565b6101ee61018e61017f611492565b60208082518301019101612934565b916101aa6101a56101a160045460ff1690565b1590565b611a66565b7f90a060bb9517819ff9fcae31809040edc14dc784a4ce151b7d5b20fea1b5cc6b604051806101da8433836123c4565b0390a15180159081156102b1575b50611a86565b6101fe60c0820151431015611aa6565b6102083415611ac6565b60018060a01b03338161021e604085015161159d565b160361029d5760015b1561027e576102366001611ae6565b610243606083015161159d565b9060e0610253602085015161159d565b930151921690612456565b805561026a6000600155565b6102726123de565b60405160008152602090f35b61023633610297610292602086015161159d565b61159d565b14611ae6565b336102ab610292845161159d565b14610227565b905060015414386101e8565b604090600319011261013657600490565b506102d8366102bd565b6104b16102f6604092600084516102ee81611411565b5236906115ba565b6104ac61030161158a565b61030f600160005414611b06565b61046e61031a611492565b91600080516020612b378339815191526103e26103d76103446020968780825183010191016116c8565b9361035c6103576101a160045460ff1690565b611b26565b7fd179e25bd63de01a033a078c79c6554f73b0e78df7c75ca4b70e1b8046ec33208b518061038b8c338361174c565b0390a16103a3895180159081156104bb575b50611b46565b6103b260608601514310611b66565b6103bc3415611b86565b65504159494e4760d01b81525b516001600160601b03191690565b895191829182611774565b0390a161043d610434846103f46117db565b9761040a6104048387015161159d565b8a611831565b6104216104198c87015161159d565b838b01611831565b61042d338c8b01611831565b015161159d565b60608701611831565b518051906104698885840151930151151561045661153d565b9360008552868501528984019015159052565b612224565b60808401526014430160a08401526104866003600055565b61048f43600155565b61049e855193849283016118b2565b03601f19810183528261146f565b611964565b5160008152602090f35b9050600154143861039d565b5034610136576000366003190112610136576020600354604051908152f35b506104f036610125565b61025e6105036040519261015884611411565b6105106005845414611ba6565b61058961052d61051e611492565b602080825183010191016127c8565b916105456105406101a160045460ff1690565b611bc6565b7f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd604051806105758433836123c4565b0390a151801590811561061c575b50611be6565b61059960a0820151431015611c06565b6105a33415611c26565b60018060a01b0333816105b9604085015161159d565b16036106085760015b156105ee576105d16001611c46565b6105de606083015161159d565b9060c0610253602085015161159d565b6105d133610602610292602086015161159d565b14611c46565b33610616610292845161159d565b146105c2565b90506001541438610583565b5061063236610125565b61064d6040916000835161064581611411565b5236906122db565b6106556125aa565b90610664600760005414611c66565b61066c611492565b906106df610684602093848082518301019101612934565b9161069c6106976101a160045460ff1690565b611c86565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4018651806106cb8433836123c4565b0390a15180159081156108a7575b50611ca6565b60c081015143106106ef90611cc6565b6106f93415611ce6565b60a081018051602001515160010190818552519083820151868582015191015115159061072461153d565b9283528583015215158682015261073a91612288565b90828401918252608081019081516107519061159d565b61075b903361272c565b61076490611d06565b80860180519095879133906001600160a01b03906107819061159d565b161461078c90611d26565b67434c41494d494e4760c01b910181905286519081906107ac9082611774565b03600080516020612b3783398151915291a16107c66129c1565b9481516107d29061159d565b6107dc9087611831565b848201516107e99061159d565b6107f590878701611831565b516107ff9061159d565b61080b90868801611831565b606001516108189061159d565b6108259060608601611831565b5161082f9061159d565b61083c9060808501611831565b805160a08401526014430160c084015280516020015160e0840152805160200151516101008401525151516101208301526108776009600055565b43600155825191829182019061088c91612a3a565b03601f198101825261089e908261146f565b6104b190611964565b905060015414386106d9565b506108bd36610125565b6108d06040916000835161064581611411565b6108d86125aa565b906108e7600360005414611d46565b6108ef611492565b906109626109076020938480825183010191016125d0565b9161091f61091a6101a160045460ff1690565b611d66565b7fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e851586518061094e8433836123c4565b0390a1518015908115610ad7575b50611d86565b60a0810151431061097290611da6565b61097c3415611dc6565b6080810180515151600101908185525190815186858201519101511515906109a261153d565b928352858301521515868201526109b891612224565b9082840191825284606082019182516109d09061159d565b6109da903361272c565b6109e390611de6565b80850180519096839133906001600160a01b0390610a009061159d565b1614610a0b90611e06565b6853554d4d4f4e494e4760b81b91018190528251908190610a2c9082611774565b03600080516020612b3783398151915291a1610a4661266d565b958151610a529061159d565b610a5c9088611831565b51610a669061159d565b610a7290878701611831565b0151610a7d9061159d565b610a8990858701611831565b51610a939061159d565b610aa09060608501611831565b805160808401524360140160a084015251515160c0830152610ac26005600055565b43600155825191829182019061088c916126ca565b9050600154143861095c565b5034610136576000366003190112610136576020600154604051908152f35b503461013657600080600319360112610b74578054610b1f611492565b906040519283918252602090604082840152835191826040850152815b838110610b5d57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b3c565b80fd5b50610b8136610125565b7fdad95ca9f6f4db9366d199de58f024451e28157c1462058e0ed629a29456b5c9610db8610dad610bbb6040946000865161064581611411565b610bc3612adf565b610bd1600960005414611e26565b610d98610bdc611492565b92610c4f610bf4602095868082518301019101612317565b91610c0c610c076101a160045460ff1690565b611e46565b7fd64d3134781556c6a626b018733c1e4f7a8f056da03bbd004578b0e46c1b667e8a5180610c3b8433836123c4565b0390a1518015908115610dd1575b50611e66565b610c5e60c08201514310611e86565b610c683415611ea6565b83810190610cd760018060a01b0392610c8d3385610c86845161159d565b1614611ec6565b610c9e600161012085015114611ee6565b610100830190610cb16001835114611f06565b6000875284610ccd610cc6608087015161159d565b925161159d565b9251921690612456565b60a0810191610d8e8a610d208551885190610d1b8b60e08901958651610d038284830151920151151590565b92610d0c61153d565b96875286015284019015159052565b612288565b50610d408c8651610d1b8b8b51938651610d038284830151920151151590565b50610d5a8c610d52606087015161159d565b95015161159d565b9451610d1b8d8951935190610d75818d840151930151151590565b91610d7e61153d565b9586528c86015284019015159052565b5151921690612456565b665355434345535360c81b91019081526103c9565b835191829182611774565b0390a160008055610dc96000600155565b6104b16123de565b90506001541438610c49565b50610de736610125565b604090610f58610dfc83519261015884611411565b610e0461158a565b610e116009855414611f26565b610e89610e2e610e1f611492565b60208082518301019101612317565b92610e46610e416101a160045460ff1690565b611f46565b7fedce43c37e9badb4abfd97a8f3d8873fd471a81a4cd5026126ad420fc829d71f875180610e758433836123c4565b0390a1518015908115610f92575b50611f66565b610e9960c0830151431015611f86565b610ea33415611fa6565b84820190610f3d60018060a01b03913383610ebe865161159d565b1603610f7e5760015b15610f6457610ed66001611fc6565b868152610f03610ee9608087015161159d565b610ef3865161159d565b9085610100890151921690612456565b60a0850151905190610d1b60e0870151610f248b6020830151920151151590565b90610f2d61153d565b948552602085015215158a840152565b50610120610253610f51606086015161159d565b935161159d565b8055610dc96000600155565b610ed633610f78610292602089015161159d565b14611fc6565b33610f8c610292875161159d565b14610ec7565b90506001541438610e83565b50610fa836610125565b610fc460405191610fb883611411565b600080935236906122db565b610fd16003835414611fe6565b61104a610fee610fdf611492565b602080825183010191016125d0565b916110066110016101a160045460ff1690565b612004565b7fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d4604051806110368433836123c4565b0390a15180159081156110c5575b50612024565b61105a60a0820151431015612044565b6110643415612064565b604081015133906001600160a01b039061107d9061159d565b16036110b15760015b15611096575061025e6001612084565b61025e906110ab61029260203393015161159d565b14612084565b336110bf610292835161159d565b14611086565b90506001541438611044565b506110db366102bd565b6110ee604091600083516102ee81611411565b6111226110f96127ae565b6111076005600054146120a4565b61110f611492565b60209281848080945183010191016127c8565b9361113a6111356101a160045460ff1690565b6120c4565b7f6338cb77316498cf6739d540d767aba015e84a5e9d79b4519ba97cd813a77e8786518061116984338361174c565b0390a1611181815180159081156112df575b506120e4565b61119060a08601514310612104565b6111c560808601518381015190610d1b898684015193015115156111b261153d565b9360008552878501528a84019015159052565b8352016111d2815161159d565b60608501906111e4610292835161159d565b6001600160a01b03918216036112d5576111fe6000612124565b6112083415612144565b86860190339082516112199061159d565b161461122490612164565b8461122d61285c565b9680516112399061159d565b6112439089611831565b015161124e9061159d565b61125a90878701611831565b516112649061159d565b61127090868801611831565b5161127a9061159d565b6112879060608601611831565b516112919061159d565b61129e9060808501611831565b805160a08401524360140160c084015251515160e08301526112c06007600055565b43600155825191829182019061088c916128c0565b6111fe6001612124565b9050600154143861117b565b5061139c606061130b6112fd36610125565b600060405161064581611411565b611319600160005414612184565b611392611336611327611492565b602080825183010191016116c8565b9161134e6113496101a160045460ff1690565b6121a4565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a6040518061137e8433836123c4565b0390a15180159081156113b4575b506121c4565b01514310156121e4565b6113a63415612204565b6000805561026a6000600155565b9050600154143861138c565b90600182811c921680156113f0575b60208310146113da57565b634e487b7160e01b600052602260045260246000fd5b91607f16916113cf565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761142c57604052565b6114346113fa565b604052565b606081019081106001600160401b0382111761142c57604052565b604081019081106001600160401b0382111761142c57604052565b601f909101601f19168101906001600160401b0382119082101761142c57604052565b60405190600082600254916114a6836113c0565b80835260019380851690811561151c57506001146114ce575b506114cc9250038361146f565b565b60026000908152600080516020612b1783398151915294602093509091905b8183106115045750506114cc9350820101386114bf565b855488840185015294850194879450918301916114ed565b90506114cc94506020925060ff191682840152151560051b820101386114bf565b604051906114cc82611439565b6040519061014082016001600160401b0381118382101761142c57604052565b6040519061010082016001600160401b0381118382101761142c57604052565b6040519061159782611411565b60008252565b6001600160a01b031690565b6001600160a01b0381160361013657565b919082604091031261013657604080519081016001600160401b038111828210176115fc575b6040526020808294803584520135916115f8836115a9565b0152565b6116046113fa565b6115e0565b5190811515820361013657565b919082606091031261013657604051606081016001600160401b03811182821017611660575b604052604061165b818395805185526020810151602086015201611609565b910152565b6116686113fa565b61163c565b81601f82011215610136576040519161168583611454565b829060c083019281841161013657915b8383106116a3575050505090565b60206060916116b28486611616565b815201920191611695565b51906114cc826115a9565b610120818303126101365760405191610100919061170090608085016001600160401b03811186821017611732575b6040528261166d565b835260c0810151611710816115a9565b602084015260e0810151611723816115a9565b60408401520151606082015290565b61173a6113fa565b6116f7565b6001600160a01b03169052565b6001600160a01b03918216815282516020808301919091529092015116604082015260600190565b6001600160601b0319909116815260200190565b6040519061179582611439565b60006040838281528260208201520152565b6040908151916117b683611454565b8260005b8281106117c657505050565b6020906117d1611788565b81840152016117ba565b6040519060c082016001600160401b03811183821017611824575b604052600060a08382815282602082015282604082015282606082015261181b6117a7565b60808201520152565b61182c6113fa565b6117f6565b6001600160a01b039091169052565b9060028110156118515760051b0190565b634e487b7160e01b600052603260045260246000fd5b60408091805184526020810151602085015201511515910152565b906000905b6002821061189457505050565b60206060826118a66001948751611867565b01930191019091611887565b91909161014060a0610160830194600180831b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261190160808201516080860190611882565b0151910152565b818110611913575050565b60008155600101611908565b90601f821161192c575050565b6114cc9160026000526020600020906020601f840160051c8301931061195a575b601f0160051c0190611908565b909150819061194d565b80519091906001600160401b038111611a3a575b61198c816119876002546113c0565b61191f565b602080601f83116001146119c857508192936000926119bd575b50508160011b916000199060031b1c191617600255565b0151905038806119a6565b6002600052601f19831694909190600080516020612b17833981519152926000905b878210611a22575050836001959610611a09575b505050811b01600255565b015160001960f88460031b161c191690553880806119fe565b806001859682949686015181550195019301906119ea565b611a426113fa565b611978565b15611a4e57565b602460405163100960cb60e01b815260406004820152fd5b15611a6d57565b60405163100960cb60e01b815260416004820152602490fd5b15611a8d57565b60405163100960cb60e01b815260426004820152602490fd5b15611aad57565b60405163100960cb60e01b815260436004820152602490fd5b15611acd57565b60405163100960cb60e01b815260446004820152602490fd5b15611aed57565b60405163100960cb60e01b815260456004820152602490fd5b15611b0d57565b60405163100960cb60e01b8152600a6004820152602490fd5b15611b2d57565b60405163100960cb60e01b8152600b6004820152602490fd5b15611b4d57565b60405163100960cb60e01b8152600c6004820152602490fd5b15611b6d57565b60405163100960cb60e01b8152600d6004820152602490fd5b15611b8d57565b60405163100960cb60e01b8152600e6004820152602490fd5b15611bad57565b60405163100960cb60e01b815260316004820152602490fd5b15611bcd57565b60405163100960cb60e01b815260326004820152602490fd5b15611bed57565b60405163100960cb60e01b815260336004820152602490fd5b15611c0d57565b60405163100960cb60e01b815260346004820152602490fd5b15611c2d57565b60405163100960cb60e01b815260356004820152602490fd5b15611c4d57565b60405163100960cb60e01b815260366004820152602490fd5b15611c6d57565b60405163100960cb60e01b815260386004820152602490fd5b15611c8d57565b60405163100960cb60e01b815260396004820152602490fd5b15611cad57565b60405163100960cb60e01b8152603a6004820152602490fd5b15611ccd57565b60405163100960cb60e01b8152603b6004820152602490fd5b15611ced57565b60405163100960cb60e01b8152603c6004820152602490fd5b15611d0d57565b60405163100960cb60e01b8152603e6004820152602490fd5b15611d2d57565b60405163100960cb60e01b8152603f6004820152602490fd5b15611d4d57565b60405163100960cb60e01b8152601c6004820152602490fd5b15611d6d57565b60405163100960cb60e01b8152601d6004820152602490fd5b15611d8d57565b60405163100960cb60e01b8152601e6004820152602490fd5b15611dad57565b60405163100960cb60e01b8152601f6004820152602490fd5b15611dcd57565b60405163100960cb60e01b815260206004820152602490fd5b15611ded57565b60405163100960cb60e01b815260226004820152602490fd5b15611e0d57565b60405163100960cb60e01b815260236004820152602490fd5b15611e2d57565b60405163100960cb60e01b815260476004820152602490fd5b15611e4d57565b60405163100960cb60e01b815260486004820152602490fd5b15611e6d57565b60405163100960cb60e01b815260496004820152602490fd5b15611e8d57565b60405163100960cb60e01b8152604a6004820152602490fd5b15611ead57565b60405163100960cb60e01b8152604b6004820152602490fd5b15611ecd57565b60405163100960cb60e01b8152604c6004820152602490fd5b15611eed57565b60405163100960cb60e01b8152604d6004820152602490fd5b15611f0d57565b60405163100960cb60e01b8152604e6004820152602490fd5b15611f2d57565b60405163100960cb60e01b8152600f6004820152602490fd5b15611f4d57565b60405163100960cb60e01b815260106004820152602490fd5b15611f6d57565b60405163100960cb60e01b815260116004820152602490fd5b15611f8d57565b60405163100960cb60e01b815260126004820152602490fd5b15611fad57565b60405163100960cb60e01b815260136004820152602490fd5b15611fcd57565b60405163100960cb60e01b815260146004820152602490fd5b15611fed57565b602460405163100960cb60e01b8152816004820152fd5b1561200b57565b60405163100960cb60e01b815260256004820152602490fd5b1561202b57565b60405163100960cb60e01b815260266004820152602490fd5b1561204b57565b60405163100960cb60e01b815260276004820152602490fd5b1561206b57565b60405163100960cb60e01b815260286004820152602490fd5b1561208b57565b60405163100960cb60e01b815260296004820152602490fd5b156120ab57565b60405163100960cb60e01b8152602a6004820152602490fd5b156120cb57565b60405163100960cb60e01b8152602b6004820152602490fd5b156120eb57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561210b57565b60405163100960cb60e01b8152602d6004820152602490fd5b1561212b57565b60405163100960cb60e01b8152602e6004820152602490fd5b1561214b57565b60405163100960cb60e01b8152602f6004820152602490fd5b1561216b57565b60405163100960cb60e01b815260306004820152602490fd5b1561218b57565b60405163100960cb60e01b815260176004820152602490fd5b156121ab57565b60405163100960cb60e01b815260186004820152602490fd5b156121cb57565b60405163100960cb60e01b815260196004820152602490fd5b156121eb57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561220b57565b60405163100960cb60e01b8152601b6004820152602490fd5b919061222e6117a7565b926000805b60028110612242575050508252565b61224c8184611840565b516122578288611840565b526122628187611840565b50600019811461227457600101612233565b634e487b7160e01b82526011600452602482fd5b91906122926117a7565b926000805b600281106122a9575050506020830152565b6122b38184611840565b516122be8288611840565b526122c98187611840565b50600019811461227457600101612297565b919082602091031261013657604051602081016001600160401b0381118282101761230a575b60405291358252565b6123126113fa565b612301565b6102208183031261013657610200906123a861233161154a565b9361233b836116bd565b8552612349602084016116bd565b602086015261235a604084016116bd565b604086015261236b606084016116bd565b606086015261237c608084016116bd565b608086015261238e8160a0850161166d565b60a086015261016083015160c08601526101808301611616565b60e08401526101e0810151610100840152015161012082015290565b6001600160a01b0390911681529051602082015260400190565b6123e96002546113c0565b806123f15750565b601f811160011461240457506000600255565b600260005261244990601f0160051c600080516020612b17833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611908565b6000602081208160025555565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526124d293600093849392849190608081016001600160401b038111828210176124d9575b6040525193165af16124c26124bb6124e6565b809261254a565b5060208082518301019101612533565b1561013657565b6124e16113fa565b6124a8565b3d1561252e573d906001600160401b038211612521575b60405191612515601f8201601f19166020018461146f565b82523d6000602084013e565b6125296113fa565b6124fd565b606090565b908160209103126101365761254790611609565b90565b156125525790565b80511561256157805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156125825790565b80511561259157805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b604051906125b782611439565b60006040838281526125c76117a7565b60208201520152565b61016081830312610136576040519161014091906126519060c085016001600160401b03811186821017612660575b604052825161260d816115a9565b8552602083015161261d816115a9565b60208601526040830151612630816115a9565b60408601526060830151612643816115a9565b60608601526080830161166d565b6080840152015160a082015290565b6126686113fa565b6125ff565b6040519060e082016001600160401b038111838210176126bd575b6040528160c06000918281528260208201528260408201528260608201526126ae6117a7565b60808201528260a08201520152565b6126c56113fa565b612688565b91909161016060c061018083019460018060a01b03808251168552806020830151166020860152806040830151166040860152606082015116606085015261271a60808201516080860190611882565b60a08101516101408501520151910152565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526001606480840191909152825261254793600093849391929184919060a081016001600160401b038111828210176127a1575b6040525193165af16124c261279a6124e6565b809261257a565b6127a96113fa565b612787565b604051906127bb82611411565b816127c46117a7565b9052565b61018081830312610136576040519161016091906128359060e085016001600160401b0381118682101761284f575b6040528251612805816115a9565b8552612813602084016116bd565b6020860152612824604084016116bd565b6040860152612643606084016116bd565b608084015261014081015160a0840152015160c082015290565b6128576113fa565b6127f7565b6040519061010082016001600160401b038111838210176128b3575b6040528160e06000918281528260208201528260408201528260608201528260808201526128a46117a7565b60a08201528260c08201520152565b6128bb6113fa565b612878565b91909161018060e06101a083019460018060a01b0380825116855280602083015116602086015280604083015116604086015260608201511660608501526129106080820151608086019061173f565b61292260a082015160a0860190611882565b60c08101516101608501520151910152565b6101a08183031261013657610180906129a761294e61156a565b93612958836116bd565b8552612966602084016116bd565b6020860152612977604084016116bd565b6040860152612988606084016116bd565b6060860152612999608084016116bd565b608086015260a0830161166d565b60a084015261016081015160c0840152015160e082015290565b6040519061014082016001600160401b03811183821017612a2d575b60405281610120600091828152826020820152826040820152826060820152826080820152612a0a6117a7565b60a08201528260c0820152612a1d611788565b60e0820152826101008201520152565b612a356113fa565b6129dd565b919091610200610120610220830194612a5484825161173f565b612a666020820151602086019061173f565b612a786040820151604086019061173f565b612a8a6060820151606086019061173f565b612a9c6080820151608086019061173f565b612aae60a082015160a0860190611882565b60c0810151610160850152612acc60e0820151610180860190611867565b6101008101516101e08501520151910152565b60408051919082016001600160401b03811183821017612b09575b60405260006020838281520152565b612b116113fa565b612afa56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acecb3acff3f437da359b4895d90b35b26b1a24e01a528ab6f7049fae3b3157a34fa164736f6c6343000811000a`,
  BytecodeLen: 12309,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/summon.rsh:80:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/summon.rsh:95:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/summon.rsh:98:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/summon.rsh:109:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/summon.rsh:112:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/summon.rsh:130:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/summon.rsh:132:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/summon.rsh:136:24:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './src/contracts/summon.rsh:139:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/summon.rsh:156:32:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './src/contracts/summon.rsh:170:17:after expr stmt semicolon',
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
  "Summoner": Summoner
  };
export const _APIs = {
  };
