/**
 * 1回読み込まれる毎に10個のダミー通信のscriptタグをheadにinsertする。
 */

(() => {
    // if (!window._dummy_enabled) {
    //     return;
    // }

    const u1 = new URL(location.href);
    const dummyUrl = u1.searchParams.get('_d_url');
    const cb1 = Math.random().toString(36).slice(-8);
    for (let i = 0; i < 10; i++) {
        fire(dummyUrl, cb1);
    }

    function fire(url, cb1) {
        const cb2 = Math.random().toString(36).slice(-8);
        const u2 = new URL(url);
        u2.searchParams.set('cb1', cb1);
        u2.searchParams.set('cb2', cb2);
        const s = document.createElement('script');
        s.type = "text/javascript";
        s.src = u2.href;
        s.async = true;
        const base = document.getElementsByTagName('script')[0];
        base.parentNode.insertBefore(s, base);
    }
})();
