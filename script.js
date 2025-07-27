// script.js - Optimized

// --- DATA ---
const spotData = [
    { id: 0, name: '雷門', category: 'ランドマーク', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop', distance: '現在地', tags: ['#定番', '#写真映え', '#浅草'], ugc: '浅草のシンボル。大きな提灯が印象的！', congestion: 'busy', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.58346362748!2d139.79363337664867!3d35.711866572577414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec130fbdd3d%3A0x5135221a7fa19dbc!2z5Luy6KaL5LiW5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1753536012983!5m2!1sja!2sjp' },
    { id: 1, name: '仲見世商店街', category: '商店街', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop', distance: '徒歩 2分', tags: ['#食べ歩き', '#お土産', '#定番'], ugc: '雷門に来た人の85%が次に訪れています', congestion: 'busy', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.58346362748!2d139.79363337664867!3d35.711866572577414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec130fbdd3d%3A0x5135221a7fa19dbc!2z5Luy6KaL5LiW5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1753536012983!5m2!1sja!2sjp' },
    { id: 2, name: '東京スカイツリー', category: '展望台', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop', distance: '電車で 5分', tags: ['#絶景', '#写真映え', '#デート'], ugc: '景色もいいし、水族館もあって一日中楽しめる！', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.115817818457!2d139.808125476359!3d35.71006267258411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1626490800000!5m2!1sja!2sjp' },
    { id: 3, name: '浅草花やしき', category: '遊園地', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop', distance: '徒歩 10分', tags: ['#レトロ', '#アトラクション'], ugc: '日本最古の遊園地。レトロな雰囲気が最高。', congestion: 'free', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4373601884595!2d139.79230247664873!3d35.71546087257617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec02219773d%3A0x6bb2077ac9a688b1!2z5rWF6I2J6Iqx44KE44GX44GN!5e0!3m2!1sja!2sjp!4v1753536782138!5m2!1sja!2sjp' },
    { id: 4, name: 'アサヒビールタワー', category: 'ランドマーク', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop', distance: '徒歩 8分', tags: ['#ビール', '#建築'], ugc: '金のオブジェが目印。できたてビールが飲める！', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25917.271699053865!2d139.7624180743164!3d35.7100091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f006b657881%3A0xa45960d4ee2a08e4!2z44Ki44K144OS44OT44O844Or5qCq5byP5Lya56S-IOacrOekvg!5e0!3m2!1sja!2sjp!4v1753535974816!5m2!1sja!2sjp' },
    { id: 5, name: 'すみだ水族館', category: '水族館', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop', distance: '電車で 5分', tags: ['#ペンギン', '#屋内', '#ファミリー'], ugc: 'スカイツリーのすぐ下。セットで行くのがおすすめ！', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1707.7292348776461!2d139.8080527427319!3d35.71073302936448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed6ddcaa63b%3A0x52f9e68583464160!2z44GZ44G_44Gg5rC05peP6aSo!5e0!3m2!1sja!2sjp!4v1753535899785!5m2!1sja!2sjp' },
    { id: 6, name: '麻布台ヒルズ', category: '商業施設', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop', distance: '電車で 30分', tags: ['#最新', '#ショッピング', '#展望'], ugc: '新しい東京の景色が見える。お店もたくさん！', congestion: 'busy', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.8138198158636!2d139.74083018597958!3d35.66154472830695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b2e40342225%3A0x3f9a1673138a69c1!2z6bq75biD5Y-w44OS44Or44K6!5e0!3m2!1sja!2sjp!4v1753552175524!5m2!1sja!2sjp' },
    { id: 7, name: 'NISSAN CROSSING', category: 'ショールーム', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop', distance: '電車で 35分', tags: ['#車', '#テクノロジー', '#銀座'], ugc: '未来のコンセプトカーがすごい。銀座の真ん中。', congestion: 'normal', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.248036918198!2d139.7624558757831!3d35.67089413054177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be660fa5107%3A0x1f7a3a701bab5f37!2sNISSAN%20CROSSING!5e0!3m2!1sja!2sjp!4v1753552301405!5m2!1sja!2sjp' },
    { id: 8, name: 'Tokyo Innovation Base', category: 'イノベーション拠点', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop', distance: '電車で 25分', tags: ['#スタートアップ', '#イベント', '#丸の内'], ugc: '新しいアイデアが生まれる場所。イベントも面白い。', congestion: 'free', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0568212847743!2d139.76020148499933!3d35.675602859621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0010c11939%3A0xe6744989593aab42!2sTokyo%20Innovation%20Base!5e0!3m2!1sja!2sjp!4v1753552426445!5m2!1sja!2sjp' },
];

// Discovery data (copy with different IDs)
const discoverySpotData = spotData.map((spot, index) => ({
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
        
        // Optimized label selection
        const isDiscovery = options.cardAreaSelector.includes('discovery');
        this.labels = {
            like: document.getElementById(isDiscovery ? 'discovery-label-like' : 'swipe-label-like'),
            dislike: document.getElementById(isDiscovery ? 'discovery-label-dislike' : 'swipe-label-dislike'),
            visited: document.getElementById(isDiscovery ? 'discovery-label-visited' : 'swipe-label-visited')
        };

        this.activeCard = null;
        this.isDragging = false;
        this.startPos = { x: 0, y: 0 };
        this.currentPos = { x: 0, y: 0 };

        this.bindMethods();
        this.init();
    }

    bindMethods() {
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragMove = this.onDragMove.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    init() {
        // Event delegation for better performance
        if (this.dislikeBtn) this.dislikeBtn.addEventListener('click', () => this.triggerSwipe('left'));
        if (this.likeBtn) this.likeBtn.addEventListener('click', () => this.triggerSwipe('right'));
        if (this.visitedBtn) this.visitedBtn.addEventListener('click', () => this.triggerSwipe('up'));
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
        if (this.activeCard) {
            this.activeCard.removeEventListener('mousedown', this.onDragStart);
            this.activeCard.removeEventListener('touchstart', this.onDragStart);
        }
        
        if (this.cardStack.length > 0) {
            this.activeCard = this.cardStack[this.cardStack.length - 1];
            
            // Smooth entrance animation
            this.activeCard.style.opacity = '1';
            this.activeCard.style.transform = 'translateY(0) scale(1)';
            this.activeCard.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out';
            
            // Add spring effect for more natural feel
            setTimeout(() => {
                this.activeCard.style.transform = 'translateY(-5px) scale(1.02)';
                setTimeout(() => {
                    this.activeCard.style.transform = 'translateY(0) scale(1)';
                    this.activeCard.style.transition = '';
                }, 150);
            }, 50);
            
            // Add event listeners
            this.activeCard.addEventListener('mousedown', this.onDragStart);
            this.activeCard.addEventListener('touchstart', this.onDragStart, { passive: false });
        }
    }

    onDragStart(e) {
        e.preventDefault();
        this.isDragging = true;
        this.startPos = {
            x: e.type === 'mousedown' ? e.clientX : e.touches[0].clientX,
            y: e.type === 'mousedown' ? e.clientY : e.touches[0].clientY
        };
        this.currentPos = { ...this.startPos };
        
        document.addEventListener('mousemove', this.onDragMove);
        document.addEventListener('touchmove', this.onDragMove, { passive: false });
        document.addEventListener('mouseup', this.onDragEnd);
        document.addEventListener('touchend', this.onDragEnd);
    }

    onDragMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        
        this.currentPos = {
            x: e.type === 'mousemove' ? e.clientX : e.touches[0].clientX,
            y: e.type === 'mousemove' ? e.clientY : e.touches[0].clientY
        };
        
        const deltaX = this.currentPos.x - this.startPos.x;
        const deltaY = this.currentPos.y - this.startPos.y;
        
        // Add swiping class for smooth animation
        this.activeCard.classList.add('swiping');
        
        // Apply transform with improved rotation calculation
        const rotation = deltaX * 0.15; // Slightly more rotation for better feel
        const scale = 1 - Math.abs(deltaX) * 0.0005; // Subtle scale effect
        
        this.activeCard.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg) scale(${scale})`;
        
        this.updateIndicator();
    }

    updateIndicator() {
        const deltaX = this.currentPos.x - this.startPos.x;
        const deltaY = this.currentPos.y - this.startPos.y;
        
        // Improved indicator logic with smoother transitions
        if (Math.abs(deltaX) > 30) {
            const direction = deltaX > 0 ? 'like' : 'dislike';
            const opacity = Math.min(Math.abs(deltaX) / 80, 1);
            
            this.labels[direction].style.opacity = opacity;
            this.labels[direction].classList.toggle('visible', opacity > 0.5);
            
            this.labels[direction === 'like' ? 'dislike' : 'like'].style.opacity = 0;
            this.labels[direction === 'like' ? 'dislike' : 'like'].classList.remove('visible');
            this.labels.visited.style.opacity = 0;
            this.labels.visited.classList.remove('visible');
        } else if (deltaY < -30) {
            const opacity = Math.min(Math.abs(deltaY) / 80, 1);
            
            this.labels.visited.style.opacity = opacity;
            this.labels.visited.classList.toggle('visible', opacity > 0.5);
            
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
        
        // Remove swiping class
        this.activeCard.classList.remove('swiping');
        
        // Reset indicators
        Object.values(this.labels).forEach(label => {
            if (label) label.style.opacity = 0;
        });
        
        const deltaX = this.currentPos.x - this.startPos.x;
        const deltaY = this.currentPos.y - this.startPos.y;
        
        // Determine swipe direction with improved thresholds
        let direction = null;
        if (Math.abs(deltaX) > 80) { // Reduced threshold for better responsiveness
            direction = deltaX > 0 ? 'right' : 'left';
        } else if (deltaY < -80) {
            direction = 'up';
        }
        
        if (direction) {
            this.triggerSwipe(direction);
        } else {
            // Smooth reset animation
            this.activeCard.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            this.activeCard.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
            
            // Remove transition after animation
            setTimeout(() => {
                this.activeCard.style.transition = '';
            }, 300);
        }
        
        // Clean up event listeners
        document.removeEventListener('mousemove', this.onDragMove);
        document.removeEventListener('touchmove', this.onDragMove);
        document.removeEventListener('mouseup', this.onDragEnd);
        document.removeEventListener('touchend', this.onDragEnd);
    }

    triggerSwipe(direction) {
        if (!this.activeCard) return;
        
        const cardData = this.cardsData.find(data => data.id == this.activeCard.dataset.id);
        if (!cardData) return;
        
        // Determine result based on direction
        let resultType = 'disliked';
        if (direction === 'right') resultType = 'liked';
        else if (direction === 'up') resultType = 'visited';
        
        this.results[resultType].push(cardData);
        
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
}

class AppManager {
    constructor() {
        // Optimized DOM caching
        this.dom = {
            screens: document.querySelectorAll('.screen'),
            navDiscovery: document.getElementById('nav-discovery'),
            navPlanning: document.getElementById('nav-planning'),
            navMyPlans: document.getElementById('nav-my-plans'),
            startPlanBtn: document.getElementById('start-plan-btn'),
            anchorPoint: document.getElementById('anchor-point'),
            checkInSpotName: document.getElementById('check-in-spot-name'),
            checkInSpotImage: document.getElementById('check-in-spot-image'),
            endOfSwipeSpotName: document.getElementById('end-of-swipe-spot-name'),
            endOfSwipeSpotImage: document.getElementById('end-of-swipe-spot-image'),
            decisionContainer: document.querySelector('#decision-screen .decision-list'),
            summaryContainer: document.querySelector('#plan-summary-screen .summary-timeline'),
            summaryTitleInput: document.getElementById('summary-title-input'),
            savePlanBtn: document.getElementById('save-plan-btn'),
            myPlansContainer: document.querySelector('.my-plans-container'),
            overallRatingContainer: document.getElementById('overall-rating-container'),
            overallRatingValue: document.getElementById('overall-rating-value'),
            overallStarsBackground: document.getElementById('overall-stars-background'),
            swipeActions: document.querySelector('.swipe-actions'),
            navButtons: document.querySelectorAll('.nav-btn'),
            backToDecisionBtn: document.getElementById('back-to-decision-btn'),
            editPlansBtn: document.getElementById('edit-plans-btn'),
            selectAllBtn: document.getElementById('select-all-btn'),
            deleteSelectedBtn: document.getElementById('delete-selected-btn'),
            cancelEditBtn: document.getElementById('cancel-edit-btn'),
            editActions: document.querySelector('.edit-actions')
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
        this.initNavigation();
        this.initGlobalActionButtons();
        this.initPlanningScreen();
        this.initCheckInScreen();
        this.initEndOfSwipeScreen();
        this.initDecisionScreenActions();
        this.initGlobalKeydownListener();
        this.initStarRating();
        this.initSavePlanButton();
        this.initMyPlansEditMode();
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

    initPlanningScreen() {
        const startPlanAction = () => {
            if (this.isTransitioning) return;
            const anchorValue = this.dom.anchorPoint.value.trim();
            if (!anchorValue) {
                alert('出発地点を入力してください');
                return;
            }
            this.currentPlan.anchor = anchorValue;
            this.switchToScreen('check-in-screen');
        };

        this.dom.startPlanBtn.addEventListener('click', startPlanAction);
    }

    initCheckInScreen() {
        document.getElementById('check-in-btn').addEventListener('click', () => {
            if (this.isTransitioning) return;
            const visitedSpotIds = new Set(this.currentPlan.visitedSpots.map(spot => spot.id).filter(id => id !== undefined && id !== null));
            const availableSpots = spotData.filter(spot => !visitedSpotIds.has(spot.id));
            
            if (availableSpots.length === 0) {
                this.switchToScreen('end-of-swipe-screen');
                return;
            }
            
            this.swiper.start(availableSpots);
            this.switchToScreen('swipe-screen');
        });

        this.dom.backToDecisionBtn?.addEventListener('click', () => {
            if (this.isTransitioning) return;
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
        
        likedSpots.forEach(spot => {
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
        this.currentPlan.visitedSpots.push(spot);
        this.dom.checkInSpotName.textContent = spot.name;
        this.dom.checkInSpotImage.style.backgroundImage = `url('${spot.image}')`;
        this.switchToScreen('check-in-screen');
    }

    populateSummaryScreen(planObject = null) {
        const plan = planObject || this.currentPlan;
        this.currentDisplayPlan = plan; // 現在表示中のプランを保存
        this.dom.summaryTitleInput.value = planObject ? plan.title : '';
        
        this.dom.summaryContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        plan.visitedSpots.forEach((spot, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'summary-item';
            itemEl.dataset.rating = spot.rating || 0;
            
            const starsHtml = Array.from({length: 5}, (_, i) => {
                const isFilled = i < (spot.rating || 0) ? 'filled' : '';
                return `<svg class="${isFilled}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
            }).join('');
            
            itemEl.innerHTML = `
                <div class="summary-item-step">${index + 1}</div>
                <div class="summary-item-content">
                    <img class="summary-item-image" src="${spot.image}" alt="${spot.name}" onerror="this.onerror=null;this.src='https://placehold.co/60x60/e2e8f0/94a3b8?text=Image';">
                    <div class="summary-item-details">
                        <h3 class="summary-item-name">${spot.name}</h3>
                        <div class="star-rating">${starsHtml}</div>
                    </div>
                </div>
            `;
            
            const starContainer = itemEl.querySelector('.star-rating');
            starContainer.addEventListener('click', (e) => {
                const stars = starContainer.querySelectorAll('svg');
                const clickedStar = e.target.closest('svg');
                if (!clickedStar) return;
                
                const rating = Array.from(stars).indexOf(clickedStar) + 1;
                this.setRating(starContainer, rating);
                spot.rating = rating;
                this.updateOverallRating();
            });
            
            fragment.appendChild(itemEl);
        });
        
        this.dom.summaryContainer.appendChild(fragment);
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
        const ratings = currentDisplayPlan.visitedSpots.map(spot => spot.rating || 0).filter(rating => rating > 0);
        if (ratings.length === 0) return;
        
        const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
        this.dom.overallRatingValue.textContent = averageRating.toFixed(1);
        
        const stars = this.dom.overallStarsBackground.querySelectorAll('svg');
        const filledCount = Math.floor(averageRating);
        
        stars.forEach((star, index) => {
            star.classList.toggle('filled', index < filledCount);
        });
        
        this.dom.overallRatingContainer.classList.add('visible');
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
            spots: this.currentPlan.visitedSpots,
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
            
            const imageUrl = plan.spots && plan.spots.length > 0 && plan.spots[0].image 
                ? plan.spots[0].image 
                : 'https://placehold.co/80x80/e2e8f0/94a3b8?text=Image';
            
            const createdDate = new Date(plan.createdAt);
            const formattedDate = createdDate.toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            
            const ratings = plan.spots.map(spot => spot.rating || 0).filter(rating => rating > 0);
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
                    <p class="plan-card-meta">${plan.spots.length}個のスポット</p>
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
    new AppManager();
}); 