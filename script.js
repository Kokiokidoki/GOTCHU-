// script.js - Optimized

// --- DATA ---
const spotData = [
    { id: 0, name: '雷門', category: 'ランドマーク', image: 'https://www.senso-ji.jp/images/guide/images/guide01_img01.jpg', distance: '現在地', tags: ['#定番', '#写真映え', '#浅草'], ugc: '浅草のシンボル。大きな提灯が印象的！', congestion: 'busy', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.58346362748!2d139.79363337664867!3d35.711866572577414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec130fbdd3d%3A0x5135221a7fa19dbc!2z5Luy6KaL5LiW5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1753536012983!5m2!1sja!2sjp' },
    { id: 1, name: '仲見世商店街', category: '商店街', image: 'https://e-asakusa.jp/wp-content/uploads/nakamise1-1024x768.jpg', distance: '徒歩 2分', tags: ['#食べ歩き', '#お土産', '#定番'], ugc: '雷門に来た人の85%が次に訪れています', congestion: 'busy', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.58346362748!2d139.79363337664867!3d35.711866572577414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec130fbdd3d%3A0x5135221a7fa19dbc!2z5Luy6KaL5LiW5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1753536012983!5m2!1sja!2sjp' },
    { id: 2, name: '東京スカイツリー', category: '展望台', image: 'https://www.tokyo-skytree.jp/enjoy/experience-tokyo-skytree/image/section/about/img-1-sp.webp', distance: '電車で 5分', tags: ['#絶景', '#写真映え', '#デート'], ugc: '景色もいいし、水族館もあって一日中楽しめる！', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.115817818457!2d139.808125476359!3d35.71006267258411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1626490800000!5m2!1sja!2sjp' },
    { id: 3, name: '浅草花やしき', category: '遊園地', image: 'https://tabiiro.jp/lpimg/leisure/206792/main/img4.jpg', distance: '徒歩 10分', tags: ['#レトロ', '#アトラクション'], ugc: '日本最古の遊園地。レトロな雰囲気が最高。', congestion: 'free', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4373601884595!2d139.79230247664873!3d35.71546087257617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec02219773d%3A0x6bb2077ac9a688b1!2z5rWF6I2J6Iqx44KE44GX44GN!5e0!3m2!1sja!2sjp!4v1753536782138!5m2!1sja!2sjp' },
    { id: 4, name: 'アサヒビールタワー', category: 'ランドマーク', image: 'https://www.tokyo-jimushosagashi.com/column/wp-content/uploads/2024/06/03-38.jpg', distance: '徒歩 8分', tags: ['#ビール', '#建築'], ugc: '金のオブジェが目印。できたてビールが飲める！', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25917.271699053865!2d139.7624180743164!3d35.7100091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f006b657881%3A0xa45960d4ee2a08e4!2z44Ki44K144OS44OT44O844Or5qCq5byP5Lya56S-IOacrOekvg!5e0!3m2!1sja!2sjp!4v1753535974816!5m2!1sja!2sjp' },
    { id: 5, name: 'すみだ水族館', category: '水族館', image: 'https://prtimes.jp/i/23075/166/resize/d23075-166-568493-0.jpg', distance: '電車で 5分', tags: ['#ペンギン', '#屋内', '#ファミリー'], ugc: 'スカイツリーのすぐ下。セットで行くのがおすすめ！', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1707.7292348776461!2d139.8080527427319!3d35.71073302936448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed6ddcaa63b%3A0x52f9e68583464160!2z44GZ44G_44Gg5rC05peP6aSo!5e0!3m2!1sja!2sjp!4v1753535899785!5m2!1sja!2sjp' },
    { id: 6, name: '麻布台ヒルズ', category: '商業施設', image: 'https://theplace.jp/wp-content/uploads/2023/11/azabudai_hills.jpg', distance: '電車で 30分', tags: ['#最新', '#ショッピング', '#展望'], ugc: '新しい東京の景色が見える。お店もたくさん！', congestion: 'busy', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.8138198158636!2d139.74083018597958!3d35.66154472830695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b2e40342225%3A0x3f9a1673138a69c1!2z6bq75biD5Y-w44OS44Or44K6!5e0!3m2!1sja!2sjp!4v1753552175524!5m2!1sja!2sjp' },
    { id: 7, name: 'NISSAN CROSSING', category: 'ショールーム', image: 'https://www.nissan.co.jp/crossing/sites/default/files/img/Cylinder_Carousel.jpg', distance: '電車で 35分', tags: ['#車', '#テクノロジー', '#銀座'], ugc: '未来のコンセプトカーがすごい。銀座の真ん中。', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.248036918198!2d139.7624558757831!3d35.67089413054177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be660fa5107%3A0x1f7a3a701bab5f37!2sNISSAN%20CROSSING!5e0!3m2!1sja!2sjp!4v1753552301405!5m2!1sja!2sjp' },
    { id: 8, name: 'Tokyo Innovation Base', category: 'イノベーション拠点', image: 'https://workmill.jp/jp/wp-content/uploads/sites/2/2024/07/L1140562-1024x683.jpg', distance: '電車で 25分', tags: ['#スタートアップ', '#イベント', '#丸の内'], ugc: '新しいアイデアが生まれる場所。イベントも面白い。', congestion: 'free', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0568212847743!2d139.76020148499933!3d35.675602859621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0010c11939%3A0xe6744989593aab42!2sTokyo%20Innovation%20Base!5e0!3m2!1sja!2sjp!4v1753552426445!5m2!1sja!2sjp' },
];

// Discovery data (copy with different IDs, excluding current location)
const discoverySpotData = spotData
    .filter(spot => spot.distance !== '現在地')
    .map((spot, index) => ({
        ...spot,
        id: 100 + index + 1
    }));

// Constants
const CONGESTION_LABELS = {
    busy: '混雑',
    normal: '通常', 
    free: '空いています'
};

const TRANSITION_DURATION = 400;
const LONG_PRESS_DURATION = 1000;

// --- CLASSES ---
class CardSwiper {
    constructor(options) {
        this.options = options;
        this.cardArea = document.querySelector(options.cardAreaSelector);
        this.dislikeBtn = document.getElementById(options.dislikeButtonId);
        this.likeBtn = document.getElementById(options.likeButtonId);
        this.visitedBtn = document.getElementById(options.visitedButtonId);
        
        // デバッグ情報
        console.log('CardSwiper constructor:', {
            cardArea: this.cardArea,
            dislikeBtn: this.dislikeBtn,
            likeBtn: this.likeBtn,
            visitedBtn: this.visitedBtn,
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        });
        
        this.cardStack = [];
        this.activeCard = null;
        this.isDragging = false;
        this.isDragStarted = false;
        this.startPos = { x: 0, y: 0 };
        this.currentPos = { x: 0, y: 0 };
        this.dragThreshold = 10;
        this.swipeThreshold = 60;
        
        // スマホでの閾値調整
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.dragThreshold = 5;  // スマホではより敏感に
            this.swipeThreshold = 40; // スマホではより短い距離でスワイプ
            console.log('Mobile thresholds applied:', {
                dragThreshold: this.dragThreshold,
                swipeThreshold: this.swipeThreshold
            });
        }
        
        this.results = { liked: [], disliked: [], visited: [] };
        this.labels = {};
        
        this.bindMethods();
        this.init();
    }

    bindMethods() {
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragMove = this.onDragMove.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }

    init() {
        // Optimized label selection
        const isDiscovery = this.options.cardAreaSelector.includes('discovery');
        this.labels = {
            like: document.getElementById(isDiscovery ? 'discovery-label-like' : 'swipe-label-like'),
            dislike: document.getElementById(isDiscovery ? 'discovery-label-dislike' : 'swipe-label-dislike'),
            visited: document.getElementById(isDiscovery ? 'discovery-label-visited' : 'swipe-label-visited')
        };
        
        console.log('Labels initialized:', this.labels);
        
        // ボタンイベントリスナー
        if (this.dislikeBtn) {
            this.dislikeBtn.addEventListener('click', () => this.triggerSwipe('left'));
            console.log('Dislike button listener added');
        }
        if (this.likeBtn) {
            this.likeBtn.addEventListener('click', () => this.triggerSwipe('right'));
            console.log('Like button listener added');
        }
        if (this.visitedBtn) {
            this.visitedBtn.addEventListener('click', () => this.triggerSwipe('up'));
            console.log('Visited button listener added');
        }
    }
    
    reset() {
        if (this.cardArea) {
            this.cardArea.innerHTML = '';
        }
        this.results = { liked: [], disliked: [], visited: [] };
        if (this.activeCard) {
            this.activeCard.removeEventListener('mousedown', this.onDragStart);
            this.activeCard.removeEventListener('touchstart', this.onDragStart);
        }
        this.activeCard = null;
    }

    start(cardsData) {
        this.reset(); 
        if (!cardsData || cardsData.length === 0) return;
        this.cardsData = [...cardsData];
        this.createCards();
        this.loadNextCard();
    }

    createCards() {
        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        
        this.cardsData.forEach(data => {
            const cardEl = document.createElement('div');
            cardEl.className = 'card';
            cardEl.dataset.id = data.id;
            
            // Optimized HTML generation
            const congestionInfo = data.congestion ? 
                `<div class="congestion-info ${data.congestion}">${CONGESTION_LABELS[data.congestion]}</div>` : '';
            
            const mapContainer = data.mapEmbedUrl ? 
                `<div class="map-container"><iframe src="${data.mapEmbedUrl}" allowfullscreen="" loading="lazy"></iframe></div>` : '';
            
            cardEl.innerHTML = `
                <div class="card-image" style="background-image: url('${data.image}')">
                    ${congestionInfo}
                </div>
                <div class="card-content-wrapper">
                    <div class="info-area ${data.mapEmbedUrl ? 'info-area-with-map' : ''}">
                        <h2 class="spot-name">${data.name}</h2>
                        <div class="details"><span>${data.category}</span> · <span>${data.distance}</span></div>
                        <div class="tags">${data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                        <p class="ugc-quote">"${data.ugc}"</p>
                    </div>
                    ${mapContainer}
                </div>
            `;
            fragment.appendChild(cardEl);
        });
        
        this.cardArea.appendChild(fragment);
        this.cardStack = Array.from(this.cardArea.querySelectorAll('.card'));
    }

    loadNextCard() {
        if (this.cardStack.length === 0) return;
        
        // 前のカードのイベントリスナーを削除
        if (this.activeCard) {
            this.activeCard.removeEventListener('mousedown', this.onDragStart);
            this.activeCard.removeEventListener('touchstart', this.onDragStart);
            this.activeCard.removeEventListener('touchend', this.onTouchEnd);
        }
        
        this.activeCard = this.cardStack[this.cardStack.length - 1];
        this.activeCard.style.cursor = 'grab';
        
        // スマホでのタッチイベント最適化
        this.activeCard.addEventListener('contextmenu', (e) => e.preventDefault());
        
        // タッチイベントとマウスイベントの両方に対応
        this.activeCard.addEventListener('mousedown', this.onDragStart);
        this.activeCard.addEventListener('touchstart', this.onDragStart, { passive: false });
        
        // スマホでのダブルタップズーム防止
        this.activeCard.addEventListener('touchend', this.onTouchEnd, { passive: false });
        
        // カードの初期状態をリセット
        this.activeCard.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        this.activeCard.style.opacity = '1';
        this.activeCard.classList.remove('swiping');
        
        console.log('Card loaded:', this.activeCard.querySelector('.card-title')?.textContent);
    }

    onDragStart(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Drag start:', e.type, 'on mobile:', /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        
        this.isDragging = true;
        this.isDragStarted = false;
        
        // デバイスタイプを判定
        const isTouch = e.type.includes('touch');
        const touch = isTouch ? e.touches[0] : e;
        
        this.startPos = {
            x: touch.clientX,
            y: touch.clientY
        };
        this.currentPos = { ...this.startPos };
        
        console.log('Start position:', this.startPos);
        
        // カードにカーソルスタイルを設定
        if (this.activeCard) {
            this.activeCard.style.cursor = 'grabbing';
        }
        
        // イベントリスナーを追加（パソコンとスマホ両対応）
        if (isTouch) {
            document.addEventListener('touchmove', this.onDragMove, { passive: false });
            document.addEventListener('touchend', this.onDragEnd);
            console.log('Touch event listeners added');
        } else {
            document.addEventListener('mousemove', this.onDragMove);
            document.addEventListener('mouseup', this.onDragEnd);
            console.log('Mouse event listeners added');
        }
    }

    onDragMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        e.stopPropagation();
        
        // デバイスタイプを判定
        const isTouch = e.type.includes('touch');
        const touch = isTouch ? e.touches[0] : e;
        
        this.currentPos = {
            x: touch.clientX,
            y: touch.clientY
        };
        
        const deltaX = this.currentPos.x - this.startPos.x;
        const deltaY = this.currentPos.y - this.startPos.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        // ドラッグ開始の閾値を超えたら実際のドラッグを開始
        if (!this.isDragStarted && distance > this.dragThreshold) {
            this.isDragStarted = true;
            this.activeCard.classList.add('swiping');
            console.log('Drag started, distance:', distance, 'threshold:', this.dragThreshold);
        }
        
        if (!this.isDragStarted) return;
        
        // Apply transform with improved rotation calculation
        const rotation = deltaX * 0.12; // より自然な回転
        const scale = Math.max(0.95, 1 - Math.abs(deltaX) * 0.0003); // より控えめなスケール効果
        
        this.activeCard.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg) scale(${scale})`;
        
        this.updateIndicator();
    }

    updateIndicator() {
        const deltaX = this.currentPos.x - this.startPos.x;
        const deltaY = this.currentPos.y - this.startPos.y;
        
        // より敏感なインジケーター表示
        if (Math.abs(deltaX) > 20) {
            const direction = deltaX > 0 ? 'like' : 'dislike';
            const opacity = Math.min(Math.abs(deltaX) / 60, 1);
            
            this.labels[direction].style.opacity = opacity;
            this.labels[direction].classList.toggle('visible', opacity > 0.3);
            
            this.labels[direction === 'like' ? 'dislike' : 'like'].style.opacity = 0;
            this.labels[direction === 'like' ? 'dislike' : 'like'].classList.remove('visible');
            this.labels.visited.style.opacity = 0;
            this.labels.visited.classList.remove('visible');
        } else if (deltaY < -20) {
            const opacity = Math.min(Math.abs(deltaY) / 60, 1);
            
            this.labels.visited.style.opacity = opacity;
            this.labels.visited.classList.toggle('visible', opacity > 0.3);
            
            this.labels.like.style.opacity = 0;
            this.labels.like.classList.remove('visible');
            this.labels.dislike.style.opacity = 0;
            this.labels.dislike.classList.remove('visible');
        } else {
            Object.values(this.labels).forEach(label => {
                if (label) {
                    label.style.opacity = 0;
                    label.classList.remove('visible');
                }
            });
        }
    }

    onDragEnd() {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        console.log('Drag end, isDragStarted:', this.isDragStarted);
        
        // カーソルスタイルをリセット
        if (this.activeCard) {
            this.activeCard.style.cursor = 'grab';
        }
        
        // Remove swiping class
        if (this.activeCard) {
            this.activeCard.classList.remove('swiping');
        }
        
        // すべてのラベルを非表示
        Object.values(this.labels).forEach(label => {
            if (label) {
                label.classList.remove('visible');
                label.style.opacity = 0;
            }
        });
        
        const deltaX = this.currentPos.x - this.startPos.x;
        const deltaY = this.currentPos.y - this.startPos.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        console.log('Final distance:', distance, 'swipeThreshold:', this.swipeThreshold);
        
        // イベントリスナーを削除
        document.removeEventListener('mousemove', this.onDragMove);
        document.removeEventListener('touchmove', this.onDragMove);
        document.removeEventListener('mouseup', this.onDragEnd);
        document.removeEventListener('touchend', this.onDragEnd);
        
        // スワイプ判定（ドラッグが開始されていて、閾値を超えている場合）
        if (this.isDragStarted && distance > this.swipeThreshold) {
            let direction = '';
            
            // 水平方向のスワイプを優先
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                direction = deltaX > 0 ? 'right' : 'left';
            } else {
                // 垂直方向のスワイプ
                direction = deltaY < 0 ? 'up' : 'down';
            }
            
            console.log('Swipe triggered:', direction);
            this.triggerSwipe(direction);
        } else {
            // スワイプしなかった場合は元の位置に戻す
            if (this.activeCard) {
                this.activeCard.style.transition = 'transform 0.3s ease-out';
                this.activeCard.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
                
                setTimeout(() => {
                    if (this.activeCard) {
                        this.activeCard.style.transition = '';
                    }
                }, 300);
            }
            console.log('Swipe cancelled, returning to original position');
        }
    }

    triggerSwipe(direction) {
        if (!this.activeCard) return;
        
        const cardData = this.cardsData.find(data => data.id == this.activeCard.dataset.id);
        if (!cardData) return;
        
        // Determine result based on direction
        let resultType = 'disliked';
        if (direction === 'right') resultType = 'liked';
        else if (direction === 'up') resultType = 'visited';
        
        // 重複を防ぐ（同じスポットを複数回追加しない）
        const alreadyExists = this.results[resultType].some(result => result.id === cardData.id);
        if (!alreadyExists) {
            this.results[resultType].push(cardData);
        }
        
        // Add swipe-out class for smooth animation
        this.activeCard.classList.add('swipe-out');
        
        // Calculate improved animation parameters
        const deltaX = direction === 'left' ? -600 : direction === 'right' ? 600 : 0;
        const deltaY = direction === 'up' ? -600 : 0;
        const rotation = direction === 'left' ? -25 : direction === 'right' ? 25 : 0;
        const scale = 0.8; // Scale down as it moves out
        
        // Apply smooth exit animation
        this.activeCard.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg) scale(${scale})`;
        this.activeCard.style.opacity = '0';
        
        // Remove card from stack
        this.cardStack.pop();
        
        // Load next card after animation with improved timing
        setTimeout(() => {
            this.loadNextCard();
            
            // Check if all cards are processed
            if (this.cardStack.length === 0 && this.options.onComplete) {
                this.options.onComplete(this.results);
            }
        }, 400); // Slightly longer for smoother feel
    }

    onTouchEnd(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Touch end event prevented');
    }
}

class AppManager {
    constructor() {
        // デバイス検出
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        console.log('Device detection:', {
            isMobile: this.isMobile,
            isTouchDevice: this.isTouchDevice,
            userAgent: navigator.userAgent
        });
        
        // DOM elements
        this.dom = {
            screens: document.querySelectorAll('.screen'),
            navDiscovery: document.getElementById('nav-discovery'),
            navPlanning: document.getElementById('nav-planning'),
            navMyPlans: document.getElementById('nav-my-plans'),
            navButtons: document.querySelectorAll('.nav-btn'),
            anchorPoint: document.getElementById('anchor-point'),
            startPlanBtn: document.getElementById('start-plan-btn'),
            checkInBtn: document.getElementById('check-in-btn'),
            backToDecisionBtn: document.getElementById('back-to-decision-btn'),
            finishPlanBtn: document.getElementById('finish-plan-btn'),
            backToPreviousBtn: document.getElementById('back-to-previous-btn'),
            summarizeFromDecisionBtn: document.getElementById('summarize-from-decision-btn'),
            savePlanBtn: document.getElementById('save-plan-btn'),
            editPlansBtn: document.getElementById('edit-plans-btn'),
            selectAllBtn: document.getElementById('select-all-btn'),
            deleteSelectedBtn: document.getElementById('delete-selected-btn'),
            cancelEditBtn: document.getElementById('cancel-edit-btn'),
            myPlansContainer: document.querySelector('.my-plans-container'),
            editActions: document.querySelector('.edit-actions'),
            // 追加のDOM要素
            checkInSpotName: document.getElementById('check-in-spot-name'),
            checkInSpotImage: document.getElementById('check-in-spot-image'),
            endOfSwipeSpotName: document.getElementById('end-of-swipe-spot-name'),
            endOfSwipeSpotImage: document.getElementById('end-of-swipe-spot-image'),
            decisionContainer: document.querySelector('#decision-screen .decision-list'),
            summaryContainer: document.querySelector('#plan-summary-screen .summary-timeline'),
            summaryTitleInput: document.getElementById('summary-title-input'),
            overallRatingContainer: document.getElementById('overall-rating-container'),
            overallRatingValue: document.getElementById('overall-rating-value'),
            overallStarsBackground: document.getElementById('overall-stars-background'),
            swipeActions: document.querySelector('.swipe-actions')
        };

        this.currentPlan = { anchor: null, visitedSpots: [] };
        this.isTransitioning = false;
        this.transitionDuration = TRANSITION_DURATION;
        this.isEditMode = false;
        this.selectedPlans = new Set();
        
        // Initialize swipers
        this.swiper = new CardSwiper({
            cardAreaSelector: '#swipe-screen .card-area',
            dislikeButtonId: 'dislike-btn',
            likeButtonId: 'like-btn',
            visitedButtonId: 'visited-btn',
            onComplete: (results) => this.handleSwipeComplete(results)
        });

        this.discoverySwiper = new CardSwiper({
            cardAreaSelector: '#discovery-screen .card-area',
            dislikeButtonId: 'dislike-btn',
            likeButtonId: 'like-btn',
            visitedButtonId: 'visited-btn',
            onComplete: (results) => this.handleDiscoveryComplete(results)
        });
        
        this.initAll();
    }

    initAll() {
        try {
            console.log('Initializing navigation...');
            this.initNavigation();
            
            console.log('Initializing global action buttons...');
            this.initGlobalActionButtons();
            
            console.log('Initializing planning screen...');
            this.initPlanningScreen();
            
            console.log('Initializing check-in screen...');
            this.initCheckInScreen();
            
            console.log('Initializing end of swipe screen...');
            this.initEndOfSwipeScreen();
            
            console.log('Initializing decision screen actions...');
            this.initDecisionScreenActions();
            
            console.log('Initializing global keydown listener...');
            this.initGlobalKeydownListener();
            
            console.log('Initializing star rating...');
            this.initStarRating();
            
            console.log('Initializing save plan button...');
            this.initSavePlanButton();
            
            console.log('Initializing my plans edit mode...');
            this.initMyPlansEditMode();
            
            // ページ読み込み後にボタンサイズを確実に設定
            setTimeout(() => {
                console.log('Setting button sizes...');
                this.setButtonSizes();
            }, 100);
            
            console.log('All initialization completed successfully');
        } catch (error) {
            console.error('Error during initialization:', error);
            // 重要な機能のみ再試行
            setTimeout(() => {
                try {
                    this.initNavigation();
                    this.initGlobalActionButtons();
                    this.setButtonSizes();
                } catch (retryError) {
                    console.error('Failed to initialize critical features:', retryError);
                }
            }, 500);
        }
    }

    initNavigation() {
        this.dom.navDiscovery.addEventListener('click', () => {
            if (this.isTransitioning) return;
            this.switchToScreen('discovery-screen');
            this.updateNavigationState('discovery');
        });

        this.dom.navPlanning.addEventListener('click', () => {
            if (this.isTransitioning) return;
            this.currentPlan = { anchor: null, visitedSpots: [] };
            this.lastSwipeResults = null; // 前回のスワイプ結果をリセット
            this.swiper.reset();
            this.dom.anchorPoint.value = '';
            this.switchToScreen('planning-screen');
            this.updateNavigationState('planning');
        });

        this.dom.navMyPlans.addEventListener('click', () => {
            if (this.isTransitioning) return;
            // マイプラン画面に遷移する際に編集モードをリセット
            this.isEditMode = false;
            this.selectedPlans.clear();
            this.switchToScreen('my-plans-screen');
            this.updateNavigationState('my-plans');
        });

        this.updateNavigationState('planning');
    }

    updateNavigationState(activeScreen) {
        this.dom.navButtons.forEach(btn => btn.classList.remove('active'));
        const activeButton = document.getElementById(`nav-${activeScreen}`);
        if (activeButton) activeButton.classList.add('active');
    }

    initGlobalActionButtons() {
        const dislikeBtn = document.getElementById('dislike-btn');
        const likeBtn = document.getElementById('like-btn');
        const visitedBtn = document.getElementById('visited-btn');

        // ボタンサイズを強制的に設定
        this.setButtonSizes();

        dislikeBtn?.addEventListener('click', () => this.handleGlobalActionButtonClick('left'));
        likeBtn?.addEventListener('click', () => this.handleGlobalActionButtonClick('right'));
        visitedBtn?.addEventListener('click', () => this.handleGlobalActionButtonClick('up'));
    }

    handleGlobalActionButtonClick(direction) {
        const activeScreen = document.querySelector('.screen.is-active');
        if (!activeScreen) return;

        const screenId = activeScreen.id;
        if (screenId === 'discovery-screen') {
            this.discoverySwiper.triggerSwipe(direction);
        } else if (screenId === 'swipe-screen') {
            this.swiper.triggerSwipe(direction);
        }
    }

    setButtonSizes() {
        const dislikeBtn = document.getElementById('dislike-btn');
        const likeBtn = document.getElementById('like-btn');
        const visitedBtn = document.getElementById('visited-btn');

        // ボタンサイズを強制的に設定
        if (dislikeBtn && dislikeBtn.querySelector('svg')) {
            const svg = dislikeBtn.querySelector('svg');
            svg.style.width = '28px';
            svg.style.height = '28px';
            svg.style.maxWidth = '28px';
            svg.style.maxHeight = '28px';
            svg.style.minWidth = '28px';
            svg.style.minHeight = '28px';
        }
        if (likeBtn && likeBtn.querySelector('svg')) {
            const svg = likeBtn.querySelector('svg');
            svg.style.width = '28px';
            svg.style.height = '28px';
            svg.style.maxWidth = '28px';
            svg.style.maxHeight = '28px';
            svg.style.minWidth = '28px';
            svg.style.minHeight = '28px';
        }
        if (visitedBtn && visitedBtn.querySelector('svg')) {
            const svg = visitedBtn.querySelector('svg');
            svg.style.width = '36px';
            svg.style.height = '36px';
            svg.style.maxWidth = '36px';
            svg.style.maxHeight = '36px';
            svg.style.minWidth = '36px';
            svg.style.minHeight = '36px';
        }
    }

    initPlanningScreen() {
        const startPlanAction = () => {
            if (this.isTransitioning) return;
            const anchorValue = this.dom.anchorPoint.value.trim();
            if (!anchorValue) {
                alert('出発地点を入力してください');
                return;
            }
            
            // プランを初期化
            this.currentPlan = { 
                anchor: anchorValue, 
                visitedSpots: [] 
            };
            
            // 雷門の画像を設定
            const kaminarimonSpot = spotData.find(spot => spot.name === '雷門');
            if (kaminarimonSpot) {
                this.dom.checkInSpotName.textContent = kaminarimonSpot.name;
                this.dom.checkInSpotImage.style.backgroundImage = `url('${kaminarimonSpot.image}')`;
            }
            
            this.switchToScreen('check-in-screen');
        };

        this.dom.startPlanBtn.addEventListener('click', startPlanAction);
    }

    initCheckInScreen() {
        // チェックイン画面の初期化：雷門の画像を設定
        const kaminarimonSpot = spotData.find(spot => spot.name === '雷門');
        if (kaminarimonSpot) {
            this.dom.checkInSpotName.textContent = kaminarimonSpot.name;
            this.dom.checkInSpotImage.style.backgroundImage = `url('${kaminarimonSpot.image}')`;
        }
        
        document.getElementById('check-in-btn').addEventListener('click', () => {
            if (this.isTransitioning) return;
            const visitedSpotIds = new Set(this.currentPlan.visitedSpots.map(spot => spot.id).filter(id => id !== undefined && id !== null));
            // 雷門（現在地）と訪問済みスポットを除外
            const availableSpots = spotData.filter(spot => 
                !visitedSpotIds.has(spot.id) && 
                spot.distance !== '現在地'
            );
            
            if (availableSpots.length === 0) {
                this.switchToScreen('end-of-swipe-screen');
                return;
            }
            
            this.swiper.start(availableSpots);
            this.switchToScreen('swipe-screen');
        });

        this.dom.backToDecisionBtn?.addEventListener('click', () => {
            if (this.isTransitioning) return;
            // 前回のスワイプ結果を保持して決定画面に戻る
            if (this.lastSwipeResults && this.lastSwipeResults.liked.length > 0) {
                this.populateDecisionScreen(this.lastSwipeResults.liked);
            }
            this.switchToScreen('decision-screen');
        });
    }

    initEndOfSwipeScreen() {
        document.getElementById('finish-plan-btn').addEventListener('click', () => {
            if (this.isTransitioning) return;
            this.populateSummaryScreen();
            this.switchToScreen('plan-summary-screen');
        });
        
        document.getElementById('back-to-previous-btn').addEventListener('click', () => {
            if (this.isTransitioning) return;
            this.switchToScreen('check-in-screen');
        });
    }
    
    initDecisionScreenActions() {
        document.getElementById('summarize-from-decision-btn').addEventListener('click', () => {
            if (this.isTransitioning) return;
            this.handleSummarizePlan();
        });
    }

    initGlobalKeydownListener() {
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' || this.isTransitioning) return;

            const activeScreen = document.querySelector('.screen.is-active');
            if (!activeScreen) return;

            if (document.activeElement.tagName === 'INPUT' && activeScreen.id !== 'planning-screen') return;

            const buttonMap = {
                'planning-screen': 'start-plan-btn',
                'check-in-screen': 'check-in-btn',
                'end-of-swipe-screen': 'finish-plan-btn'
            };

            const buttonId = buttonMap[activeScreen.id];
            if (buttonId) {
                const button = document.getElementById(buttonId);
                if (button) {
                    e.preventDefault();
                    button.click();
                }
            }
        });
    }

    handleSwipeComplete(results) {
        // スワイプ結果を保存
        this.lastSwipeResults = results;
        
        if (results.liked.length > 0) {
            this.populateDecisionScreen(results.liked);
            this.switchToScreen('decision-screen');
        } else {
            this.switchToScreen('end-of-swipe-screen');
        }
    }

    handleDiscoveryComplete(results) {
        this.discoverySwiper.start(discoverySpotData);
    }
    
    handleSummarizePlan() {
        this.populateSummaryScreen();
        this.switchToScreen('plan-summary-screen');
    }

    populateDecisionScreen(likedSpots) {
        this.dom.decisionContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        // 重複を除去（IDで判定）し、現在地と訪問済みスポットを除外
        const uniqueSpots = likedSpots.filter((spot, index, self) => {
            const isUnique = index === self.findIndex(s => s.id === spot.id);
            const isNotCurrentLocation = spot.distance !== '現在地';
            const isNotVisited = !this.currentPlan.visitedSpots.some(visitedSpot => visitedSpot.id === spot.id);
            return isUnique && isNotCurrentLocation && isNotVisited;
        });
        
        // 表示するスポットがない場合の処理
        if (uniqueSpots.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'decision-empty-message';
            emptyMessage.innerHTML = '<p>選択できるスポットがありません</p>';
            this.dom.decisionContainer.appendChild(emptyMessage);
            return;
        }
        
        uniqueSpots.forEach(spot => {
            const itemEl = document.createElement('div');
            itemEl.className = 'decision-item';
            itemEl.innerHTML = `
                <img src="${spot.image}" alt="${spot.name}" onerror="this.onerror=null;this.src='https://placehold.co/60x60/e2e8f0/94a3b8?text=Image';">
                <div class="decision-item-info">
                    <h3>${spot.name}</h3>
                    <div class="decision-item-meta">
                        <p>${spot.distance}</p>
                        <span class="decision-congestion ${spot.congestion}">${CONGESTION_LABELS[spot.congestion]}</span>
                    </div>
                </div>
            `;
            itemEl.addEventListener('click', () => this.decideNextSpot(spot));
            fragment.appendChild(itemEl);
        });
        
        this.dom.decisionContainer.appendChild(fragment);
    }

    decideNextSpot(spot) {
        // スポットにratingプロパティを確実に初期化
        const spotWithRating = {
            ...spot,
            rating: spot.rating || 0
        };
        this.currentPlan.visitedSpots.push(spotWithRating);
        this.dom.checkInSpotName.textContent = spot.name;
        this.dom.checkInSpotImage.style.backgroundImage = `url('${spot.image}')`;
        this.switchToScreen('check-in-screen');
    }

    populateSummaryScreen(planObject = null) {
        const plan = planObject || this.currentPlan;
        this.currentDisplayPlan = plan; // 現在表示中のプランを保存
        this.dom.summaryTitleInput.value = planObject ? plan.title : '';
        
        // 新規作成時のみ花びらエフェクトを開始
        if (!planObject) {
            this.startPetalsEffect();
        }
        
        this.dom.summaryContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        // 後方互換性のため、spotsとvisitedSpotsの両方をチェック
        let visitedSpots = plan.visitedSpots || plan.spots || [];
        
        // 新規作成時は雷門を最初に追加
        if (!planObject && visitedSpots.length > 0) {
            const kaminarimonSpot = spotData.find(spot => spot.name === '雷門');
            if (kaminarimonSpot) {
                const kaminarimonWithRating = {
                    ...kaminarimonSpot,
                    rating: 0
                };
                visitedSpots = [kaminarimonWithRating, ...visitedSpots];
                
                // 雷門を含む全てのスポットをcurrentDisplayPlanに保存
                this.currentDisplayPlan = {
                    ...this.currentDisplayPlan,
                    visitedSpots: visitedSpots
                };
            }
        }
        
        // visitedSpotsが存在しない場合の処理を追加
        if (visitedSpots.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'summary-empty-message';
            emptyMessage.innerHTML = '<p>まだ訪れたスポットがありません</p>';
            this.dom.summaryContainer.appendChild(emptyMessage);
            return;
        }
        
        // プランオブジェクトが渡された場合（過去のプラン）はしおりUI、そうでなければ通常のUI
        const isHistoricalPlan = planObject !== null;
        
        visitedSpots.forEach((spot, index) => {
            // スポットのratingプロパティを確実に初期化
            const spotWithRating = {
                ...spot,
                rating: spot.rating || 0
            };
            
            const itemEl = document.createElement('div');
            itemEl.className = 'summary-item';
            itemEl.dataset.rating = spotWithRating.rating;
            
            const starsHtml = Array.from({length: 5}, (_, i) => {
                const isFilled = i < spotWithRating.rating ? 'filled' : '';
                return `<svg class="${isFilled}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
            }).join('');
            
            if (isHistoricalPlan) {
                // 過去のプラン用のしおりUI
                itemEl.innerHTML = `
                    <div class="summary-item-bookmark">
                        <div class="bookmark-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                            </svg>
                        </div>
                        <div class="bookmark-number">${index + 1}</div>
                    </div>
                    <div class="summary-item-content">
                        <div class="summary-item-image-container">
                            <img class="summary-item-image" src="${spot.image}" alt="${spot.name}" onerror="this.onerror=null;this.src='https://placehold.co/120x120/e2e8f0/94a3b8?text=Image';">
                            <div class="image-overlay">
                                <div class="visit-badge">訪問済み</div>
                            </div>
                        </div>
                        <div class="summary-item-details">
                            <h3 class="summary-item-name">${spot.name}</h3>
                            <div class="summary-item-meta">
                                <span class="visit-date">訪問日: ${new Date().toLocaleDateString('ja-JP')}</span>
                                <span class="visit-time">訪問時刻: ${new Date().toLocaleTimeString('ja-JP', {hour: '2-digit', minute: '2-digit'})}</span>
                            </div>
                            <div class="star-rating-container">
                                <span class="rating-label">評価:</span>
                                <div class="star-rating">${starsHtml}</div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // 新規作成時の通常UI
                itemEl.innerHTML = `
                    <div class="summary-item-step">${index + 1}</div>
                    <div class="summary-item-content">
                        <img class="summary-item-image" src="${spot.image}" alt="${spot.name}" onerror="this.onerror=null;this.src='https://placehold.co/60x60/e2e8f0/94a3b8?text=Image';">
                        <div class="summary-item-details">
                            <h3 class="summary-item-name">${spot.name}</h3>
                            <div class="star-rating-container" style="display: flex !important; visibility: visible !important; opacity: 1 !important;">
                                <span class="rating-label" style="visibility: visible !important; opacity: 1 !important;">評価:</span>
                                <div class="star-rating" style="display: flex !important; visibility: visible !important; opacity: 1 !important;">${starsHtml}</div>
                            </div>
                        </div>
                    </div>
                `;
                

            }
            
            const starContainer = itemEl.querySelector('.star-rating');
            starContainer.addEventListener('click', (e) => {
                const stars = starContainer.querySelectorAll('svg');
                const clickedStar = e.target.closest('svg');
                if (!clickedStar) return;
                
                const rating = Array.from(stars).indexOf(clickedStar) + 1;
                this.setRating(starContainer, rating);
                spotWithRating.rating = rating;
                
                // currentDisplayPlanのスポットも更新
                if (this.currentDisplayPlan && this.currentDisplayPlan.visitedSpots) {
                    const spotToUpdate = this.currentDisplayPlan.visitedSpots.find(s => s.id === spotWithRating.id);
                    if (spotToUpdate) {
                        spotToUpdate.rating = rating;
                    }
                }
                
                this.updateOverallRating();
            });
            
            fragment.appendChild(itemEl);
        });
        
        this.dom.summaryContainer.appendChild(fragment);
        
        // 総合評価の星を初期化
        this.dom.overallStarsBackground.innerHTML = Array.from({length: 5}, () => 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
        ).join('');
        
        this.updateOverallRating();
    }

    initStarRating() {
        this.setRating = (starContainer, rating) => {
            const stars = starContainer.querySelectorAll('svg');
            stars.forEach((star, index) => {
                star.classList.toggle('filled', index < rating);
            });
        };
    }

    updateOverallRating() {
        // 現在表示中のプランを取得
        const currentDisplayPlan = this.currentDisplayPlan || this.currentPlan;
        
        // 新規作成時は雷門を含む全てのスポットの評価を取得
        let allSpots = currentDisplayPlan.visitedSpots || [];
        // 新規作成時（titleがない場合）は雷門を含む全てのスポットを使用
        if (!currentDisplayPlan.title && allSpots.length > 0) {
            // currentDisplayPlanに雷門が含まれているかチェック
            const hasKaminarimon = allSpots.some(spot => spot.name === '雷門');
            if (!hasKaminarimon) {
                // 雷門が含まれていない場合は追加
                const kaminarimonSpot = spotData.find(spot => spot.name === '雷門');
                if (kaminarimonSpot) {
                    const kaminarimonWithRating = {
                        ...kaminarimonSpot,
                        rating: 0
                    };
                    allSpots = [kaminarimonWithRating, ...allSpots];
                }
            }
        }
        
        const ratings = allSpots.map(spot => spot.rating || 0);
        
        // 評価が0より大きいスポットが1つでもあれば総合評価を表示
        const validRatings = ratings.filter(rating => rating > 0);
        if (validRatings.length === 0) {
            // 評価がない場合は0.0を表示
            this.dom.overallRatingValue.textContent = '0.0';
            const stars = this.dom.overallStarsBackground.querySelectorAll('svg');
            stars.forEach((star, index) => {
                star.classList.toggle('filled', false);
            });
        } else {
            const averageRating = validRatings.reduce((sum, rating) => sum + rating, 0) / validRatings.length;
            this.dom.overallRatingValue.textContent = averageRating.toFixed(1);
            
            // 星の表示を更新
            const stars = this.dom.overallStarsBackground.querySelectorAll('svg');
            const filledCount = Math.floor(averageRating);
            
            stars.forEach((star, index) => {
                star.classList.toggle('filled', index < filledCount);
            });
        }
        
        // 必ず総合評価UIを表示
        this.dom.overallRatingContainer.classList.add('visible');
    }

    startPetalsEffect() {
        const confettiContainer = document.querySelector('.confetti-container');
        if (!confettiContainer) return;
        
        // 既存の紙吹雪をクリア
        confettiContainer.innerHTML = '';
        
        // 紙吹雪の種類と色の定義
        const confettiTypes = [
            { shape: 'square', color: 'red' },
            { shape: 'circle', color: 'blue' },
            { shape: 'triangle', color: 'green' },
            { shape: 'square', color: 'yellow' },
            { shape: 'circle', color: 'purple' },
            { shape: 'triangle', color: 'pink' },
            { shape: 'square', color: 'orange' },
            { shape: 'circle', color: 'red' },
            { shape: 'triangle', color: 'blue' },
            { shape: 'square', color: 'green' }
        ];
        
        // 紙吹雪を生成する関数
        const createConfetti = () => {
            const confetti = document.createElement('div');
            const confettiType = confettiTypes[Math.floor(Math.random() * confettiTypes.length)];
            
            confetti.className = `confetti ${confettiType.shape} ${confettiType.color}`;
            
            // ランダムな位置とサイズを設定
            const size = 6 + Math.random() * 6; // 6px - 12px
            if (confettiType.shape === 'triangle') {
                confetti.style.borderLeftWidth = size/2 + 'px';
                confetti.style.borderRightWidth = size/2 + 'px';
                confetti.style.borderBottomWidth = size + 'px';
            } else {
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
            }
            
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            
            // ランダムにスピンアニメーションを追加
            if (Math.random() > 0.6) {
                confetti.classList.add('confetti-spin');
            }
            
            confettiContainer.appendChild(confetti);
            
            // アニメーション終了後に紙吹雪を削除
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 5000);
        };
        
        // 最初の紙吹雪を段階的に生成
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createConfetti(), i * 100);
        }
        
        // 継続的に紙吹雪を生成
        const confettiInterval = setInterval(() => {
            createConfetti();
        }, 200);
        
        // 8秒後に紙吹雪生成を停止
        setTimeout(() => {
            clearInterval(confettiInterval);
        }, 8000);
        
        // 追加の紙吹雪をランダムなタイミングで生成
        const randomConfetti = setInterval(() => {
            if (Math.random() > 0.8) {
                createConfetti();
            }
        }, 500);
        
        setTimeout(() => {
            clearInterval(randomConfetti);
        }, 8000);
    }

    initSavePlanButton() {
        this.dom.savePlanBtn.addEventListener('click', () => this.savePlan());
    }

    savePlan() {
        const title = this.dom.summaryTitleInput.value.trim();
        if (!title) {
            alert('プランのタイトルを入力してください');
            return;
        }
        
        const plan = {
            id: Date.now(),
            title: title,
            visitedSpots: this.currentPlan.visitedSpots,
            createdAt: new Date().toISOString()
        };
        
        const savedPlans = JSON.parse(localStorage.getItem('saved_plans') || '[]');
        savedPlans.push(plan);
        localStorage.setItem('saved_plans', JSON.stringify(savedPlans));
        
        alert('プランを保存しました！');
        this.switchToScreen('my-plans-screen');
    }

    displaySavedPlans() {
        // 表示時に編集モードをリセット
        this.isEditMode = false;
        this.selectedPlans.clear();
        
        // 編集ボタンの表示状態をリセット
        if (this.dom.editActions) this.dom.editActions.style.display = 'none';
        if (this.dom.editPlansBtn) this.dom.editPlansBtn.style.display = 'flex';
        
        const savedPlans = JSON.parse(localStorage.getItem('saved_plans') || '[]');
        const container = this.dom.myPlansContainer;
        
        // Clear container but keep header
        const header = container.querySelector('.my-plans-header');
        container.innerHTML = '';
        if (header) {
            container.appendChild(header);
        }
        
        if (savedPlans.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'plan-card';
            emptyMessage.innerHTML = `
                <div class="plan-card-image" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"></div>
                <div class="plan-card-content">
                    <h3 class="plan-card-title">まだプランがありません</h3>
                    <p class="plan-card-meta">プラン作成フローでプランを作成してみましょう</p>
                </div>
            `;
            container.appendChild(emptyMessage);
            return;
        }
        
        savedPlans.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        
        const fragment = document.createDocumentFragment();
        
        savedPlans.forEach((plan, index) => {
            const planCard = document.createElement('div');
            planCard.className = 'plan-card';
            planCard.dataset.planId = plan.id;
            
            // 後方互換性のため、spotsとvisitedSpotsの両方をチェック
            const spots = plan.visitedSpots || plan.spots || [];
            
            const imageUrl = spots.length > 0 && spots[0].image 
                ? spots[0].image 
                : 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Image';
            
            const createdDate = new Date(plan.createdAt);
            const formattedDate = createdDate.toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            const ratings = spots.map(spot => spot.rating || 0).filter(rating => rating > 0);
            let averageRating = 0;
            let ratingDisplay = '';
            
            if (ratings.length > 0) {
                averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
                const roundedRating = Math.round(averageRating);
                
                const starsHtml = Array.from({length: 5}, (_, i) => {
                    const isFilled = i < roundedRating ? 'filled' : '';
                    return `<svg class="${isFilled}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
                }).join('');
                
                ratingDisplay = `<p class="plan-card-rating">${starsHtml} ${averageRating.toFixed(1)}</p>`;
            }
            
            planCard.innerHTML = `
                <div class="plan-card-image" style="background-image: url('${imageUrl}')"></div>
                <div class="plan-card-content">
                    <h3 class="plan-card-title">${plan.title}</h3>
                    <p class="plan-card-meta">${spots.length}個のスポット</p>
                    ${ratingDisplay}
                    <p class="plan-card-date">作成日: ${formattedDate}</p>
                </div>
            `;
            
            // Long-press delete functionality
            let longPressTimer = null;
            let isLongPress = false;
            
            const startLongPress = () => {
                isLongPress = false;
                longPressTimer = setTimeout(() => {
                    isLongPress = true;
                    planCard.classList.add('is-held');
                }, LONG_PRESS_DURATION);
            };
            
            const endLongPress = () => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
                if (isLongPress) {
                    planCard.classList.remove('is-held');
                    if (confirm('このプランを削除しますか？')) {
                        const updatedPlans = savedPlans.filter(p => p.id !== plan.id);
                        localStorage.setItem('saved_plans', JSON.stringify(updatedPlans));
                        this.displaySavedPlans();
                    }
                }
            };
            
            // Event listeners
            planCard.addEventListener('mousedown', startLongPress);
            planCard.addEventListener('mouseup', endLongPress);
            planCard.addEventListener('mouseleave', endLongPress);
            planCard.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startLongPress();
            });
            planCard.addEventListener('touchend', (e) => {
                e.preventDefault();
                endLongPress();
            });
            // 既存のクリックイベントを一度解除してから再登録
            planCard.onclick = null;
            planCard.addEventListener('click', (e) => {
                if (!this.isEditMode) {
                    this.populateSummaryScreen(plan);
                    this.switchToScreen('plan-summary-screen');
                }
            });
            
            fragment.appendChild(planCard);
        });
        
        container.appendChild(fragment);
    }

    switchToScreen(screenId) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        // Get current active screen
        const currentScreen = document.querySelector('.screen.is-active');
        const targetScreen = document.getElementById(screenId);
        
        if (!targetScreen) {
            this.isTransitioning = false;
            return;
        }
        
        // Smooth exit animation for current screen
        if (currentScreen) {
            currentScreen.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            currentScreen.style.opacity = '0';
            currentScreen.style.transform = 'scale(0.95) translateY(-10px)';
        }
        
        // Hide all screens after exit animation
        setTimeout(() => {
            this.dom.screens.forEach(screen => {
                screen.classList.remove('is-active');
                screen.style.transition = '';
                screen.style.opacity = '';
                screen.style.transform = '';
            });
            
            // Show target screen with entrance animation
            targetScreen.classList.add('is-active');
            targetScreen.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            targetScreen.style.opacity = '0';
            targetScreen.style.transform = 'scale(1.05) translateY(10px)';
            
            // Trigger entrance animation
            requestAnimationFrame(() => {
                targetScreen.style.opacity = '1';
                targetScreen.style.transform = 'scale(1) translateY(0)';
            });
            
            // Theme switching
            document.body.classList.remove('theme-planning', 'theme-discovery');
            
            const planningScreens = ['planning-screen', 'check-in-screen', 'swipe-screen', 'decision-screen', 'end-of-swipe-screen', 'plan-summary-screen'];
            if (planningScreens.includes(screenId)) {
                document.body.classList.add('theme-planning');
            } else if (screenId === 'discovery-screen') {
                document.body.classList.add('theme-discovery');
            }
            
            // Update navigation state
            this.updateNavigationActiveState(screenId);
            
            // Global action button display control
            if (screenId === 'discovery-screen' || screenId === 'swipe-screen') {
                this.dom.swipeActions.style.opacity = '1';
                this.dom.swipeActions.style.pointerEvents = 'auto';
                if (screenId === 'discovery-screen') {
                    this.discoverySwiper.start(discoverySpotData);
                }
                // スワイプ関連画面に切り替わった時にボタンサイズを再設定
                setTimeout(() => {
                    this.setButtonSizes();
                }, 100);
            } else {
                this.dom.swipeActions.style.opacity = '0';
                this.dom.swipeActions.style.pointerEvents = 'none';
            }
            
            if (screenId === 'my-plans-screen') {
                this.displaySavedPlans();
            }
            
            // Reset transition flag and clean up
            setTimeout(() => {
                this.isTransitioning = false;
                targetScreen.style.transition = '';
                targetScreen.style.opacity = '';
                targetScreen.style.transform = '';
            }, 400);
        }, 300);
    }

    updateNavigationActiveState(screenId) {
        this.dom.navButtons.forEach(btn => btn.classList.remove('is-active-nav'));
        
        const navMap = {
            'discovery-screen': 'nav-discovery',
            'planning-screen': 'nav-planning',
            'my-plans-screen': 'nav-my-plans'
        };
        
        const activeNavId = navMap[screenId];
        if (activeNavId) {
            const activeNav = document.getElementById(activeNavId);
            if (activeNav) activeNav.classList.add('is-active-nav');
        }
    }

    initMyPlansEditMode() {
        // Edit button click
        this.dom.editPlansBtn?.addEventListener('click', () => {
            this.enterEditMode();
        });

        // Select all button
        this.dom.selectAllBtn?.addEventListener('click', () => {
            this.selectAllPlans();
        });

        // Delete selected button
        this.dom.deleteSelectedBtn?.addEventListener('click', () => {
            this.deleteSelectedPlans();
        });

        // Cancel edit button
        this.dom.cancelEditBtn?.addEventListener('click', () => {
            this.exitEditMode();
        });
    }

    enterEditMode() {
        this.isEditMode = true;
        this.selectedPlans.clear();
        
        // Show edit actions, hide edit button
        this.dom.editActions.style.display = 'flex';
        this.dom.editPlansBtn.style.display = 'none';
        
        // Add selectable class to all plan cards
        const planCards = this.dom.myPlansContainer.querySelectorAll('.plan-card');
        planCards.forEach(card => {
            card.classList.add('selectable');
            card.addEventListener('click', this.handlePlanCardClick.bind(this));
        });
    }

    exitEditMode() {
        this.isEditMode = false;
        this.selectedPlans.clear();
        
        // Hide edit actions, show edit button
        this.dom.editActions.style.display = 'none';
        this.dom.editPlansBtn.style.display = 'flex';
        
        // Remove selectable class and click handlers
        const planCards = this.dom.myPlansContainer.querySelectorAll('.plan-card');
        planCards.forEach(card => {
            card.classList.remove('selectable', 'selected');
            card.removeEventListener('click', this.handlePlanCardClick.bind(this));
        });
    }

    handlePlanCardClick(e) {
        if (!this.isEditMode) return;
        
        const planCard = e.currentTarget;
        const planId = planCard.dataset.planId;
        
        if (this.selectedPlans.has(planId)) {
            this.selectedPlans.delete(planId);
            planCard.classList.remove('selected');
        } else {
            this.selectedPlans.add(planId);
            planCard.classList.add('selected');
        }
        
        // Update delete button state
        this.dom.deleteSelectedBtn.disabled = this.selectedPlans.size === 0;
    }

    selectAllPlans() {
        const planCards = this.dom.myPlansContainer.querySelectorAll('.plan-card.selectable');
        planCards.forEach(card => {
            const planId = card.dataset.planId;
            this.selectedPlans.add(planId);
            card.classList.add('selected');
        });
        
        this.dom.deleteSelectedBtn.disabled = false;
    }

    deleteSelectedPlans() {
        if (this.selectedPlans.size === 0) return;
        
        if (confirm(`${this.selectedPlans.size}個のプランを削除しますか？`)) {
            const savedPlans = JSON.parse(localStorage.getItem('saved_plans') || '[]');
            const updatedPlans = savedPlans.filter(plan => !this.selectedPlans.has(plan.id.toString()));
            
            localStorage.setItem('saved_plans', JSON.stringify(updatedPlans));
            this.exitEditMode();
            this.displaySavedPlans();
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('GOTCHU! App initializing...');
        console.log('Platform:', navigator.platform);
        console.log('User Agent:', navigator.userAgent);
        console.log('Touch Support:', 'ontouchstart' in window);
        console.log('Max Touch Points:', navigator.maxTouchPoints);
        
        // スマホ特有の設定
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log('Mobile device detected');
            // スマホでのタッチイベント最適化
            document.addEventListener('touchstart', function(e) {
                if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                    e.preventDefault();
                }
            }, { passive: false });
        }
        
        new AppManager();
        console.log('GOTCHU! App initialized successfully');
    } catch (error) {
        console.error('Error initializing GOTCHU! App:', error);
        // Fallback initialization
        setTimeout(() => {
            try {
                new AppManager();
                console.log('GOTCHU! App initialized on retry');
            } catch (retryError) {
                console.error('Failed to initialize app on retry:', retryError);
            }
        }, 1000);
    }
});

// Add error handling for unhandled errors
window.addEventListener('error', (event) => {
    console.error('Unhandled error:', event.error);
});

// Add error handling for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
}); 