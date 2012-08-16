jqeury_hover_delay.js
=====================

# About

*  jQuery の hover に delay 機能を追加した hoverDelay を作成しました。

# Usage

    $(this).hoverDelay(
        function() {
            // ここは通常のhoverと同じ
        },

        function() {
            // ここは通常のhoverと同じ
        },

        1000, // ここは、hover開始までの待機時間 (number of milliseconds)
        1000  // ここは、hover終了までの待機時間 (number of milliseconds)
    );
