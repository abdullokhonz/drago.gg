// Players data
const players = [
    {
        nickname: "iLLustratorZ",
        realName: "Abdullokhon Ghaibulloev",
        role: "Sniper",
        rating: "2",
        age: "16",
        country: "USA",
        countryCode: "us",
        steamAvatar: "https://avatars.cloudflare.steamstatic.com/e63eb9d24069a039c782a628a91bc93b6f9b7dda_full.jpg",
        steamLink: "https://steamcommunity.com/id/iLLustratorZ/",
        faceitLink: "https://www.faceit.com/players/iLLustratorZ",
        csstatsLink: "https://csstats.gg/player/76561199545604424"
    },
    {
        nickname: "yozu",
        realName: "Jonas Gade Jensen",
        role: "Trainer",
        rating: "2",
        age: "12",
        country: "Denmark",
        countryCode: "dk",
        steamAvatar: "https://avatars.cloudflare.steamstatic.com/25bc301ee1a423137c294b0f6fad4c1f7867533b_full.jpg",
        steamLink: "https://steamcommunity.com/profiles/76561199528105181/",
        faceitLink: "#",
        csstatsLink: "https://csstats.gg/player/76561199528105181"
    },
    {
        nickname: "b3rry",
        realName: "Victor",
        role: "undefined",
        rating: "1.75",
        age: "12",
        country: "Denmark",
        countryCode: "dk",
        steamAvatar: "https://avatars.cloudflare.steamstatic.com/37a512b805e9d5a4dc258b297522aa2903693ecb_full.jpg",
        steamLink: "https://steamcommunity.com/profiles/76561199246478308/",
        faceitLink: "#",
        csstatsLink: "https://csstats.gg/player/76561199246478308"
    },
    {
        nickname: "alex_ranzers",
        realName: "Azam Bayzoev",
        role: "undefined",
        rating: "0.80",
        age: "15",
        country: "Tajikistan",
        countryCode: "tj",
        steamAvatar: "https://avatars.cloudflare.steamstatic.com/a02524b7a71888b112376842d51bc5cac67b5d25_full.jpg",
        steamLink: "https://steamcommunity.com/profiles/76561199466631416/",
        faceitLink: "https://www.faceit.com/players/alex_ranzers",
        csstatsLink: "#"
    }
];

// Generate player cards
document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.getElementById('teamContainer');
    
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        
        playerCard.innerHTML = `
            <div class="player-img">
                <img src="${player.steamAvatar}" alt="${player.nickname}">
                <div class="player-overlay">
                    <div class="player-role">${player.role}</div>
                </div>
            </div>
            <div class="player-info">
                <h3 class="player-name">${player.nickname} <span class="flag-icon flag-icon-${player.countryCode}"></span></h3>
                <p class="player-realname">${player.realName}</p>
                <div class="player-stats">
                    <div class="stat">
                        <span class="stat-value">${player.rating}</span>
                        <span class="stat-name">Rating</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${player.age}</span>
                        <span class="stat-name">Age</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${player.country}</span>
                        <span class="stat-name">Country</span>
                    </div>
                </div>
                <div class="player-social">
                    <a href="${player.steamLink}" target="_blank"><i class="fab fa-steam"></i></a>
                    <a href="${player.faceitLink}" target="_blank">
                        <svg class="svg-social" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Faceit--Streamline-Simple-Icons">
                            <desc>Faceit Streamline Icon: https://streamlinehq.com</desc><title>FACEIT</title><path d="M23.999 2.705a0.167 0.167 0 0 0 -0.312 -0.1 1141.27 1141.27 0 0 0 -6.053 9.375H0.218c-0.221 0 -0.301 0.282 -0.11 0.352 7.227 2.73 17.667 6.836 23.5 9.134 0.15 0.06 0.39 -0.08 0.39 -0.18z" stroke-width="1"></path>
                        </svg>
                    </a>
                    <a href="${player.csstatsLink}" target="_blank">
                        <svg class="svg-social" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Stats-Chart--Streamline-Ionic-Filled">
                            <desc>Stats Chart Streamline Icon: https://streamlinehq.com</desc><path d="M9.74895 46.4988H6.74899c-0.59673 0 -1.16902 -0.2371 -1.59097 -0.659 -0.42194 -0.4219 -0.659 -0.9943 -0.659 -1.591V30.749c0 -0.5967 0.23706 -1.1691 0.659 -1.591 0.42195 -0.4219 0.99424 -0.659 1.59097 -0.659h2.99996c0.59675 0 1.16905 0.2371 1.59105 0.659 0.4218 0.4219 0.6589 0.9943 0.6589 1.591v13.4998c0 0.5967 -0.2371 1.1691 -0.6589 1.591 -0.422 0.4219 -0.9943 0.659 -1.59105 0.659Z" stroke-width="1"></path><path d="M30.7499 46.4992H27.75c-0.5967 0 -1.1691 -0.2371 -1.591 -0.659 -0.4219 -0.422 -0.659 -0.9943 -0.659 -1.591V21.7495c0 -0.5967 0.2371 -1.1691 0.659 -1.591 0.4219 -0.4219 0.9943 -0.659 1.591 -0.659h2.9999c0.5967 0 1.1691 0.2371 1.591 0.659 0.4219 0.4219 0.659 0.9943 0.659 1.591v22.4997c0 0.5967 -0.2371 1.169 -0.659 1.591 -0.4219 0.4219 -0.9943 0.659 -1.591 0.659Z" stroke-width="1"></path><path d="M41.2499 46.499H38.25c-0.5967 0 -1.1691 -0.2371 -1.591 -0.659 -0.4219 -0.4219 -0.659 -0.9943 -0.659 -1.591V11.2495c0 -0.5967 0.2371 -1.1691 0.659 -1.59103 0.4219 -0.42191 0.9943 -0.65896 1.591 -0.65896h2.9999c0.5967 0 1.1691 0.23705 1.591 0.65896 0.4219 0.42193 0.659 0.99433 0.659 1.59103V44.249c0 0.5967 -0.2371 1.1691 -0.659 1.591 -0.4219 0.4219 -0.9943 0.659 -1.591 0.659Z" stroke-width="1"></path><path d="M20.2499 46.4994H17.25c-0.5967 0 -1.1691 -0.2371 -1.591 -0.659 -0.4219 -0.4219 -0.659 -0.9943 -0.659 -1.591V3.74997c0 -0.59673 0.2371 -1.16902 0.659 -1.59097 0.4219 -0.42195 0.9943 -0.659 1.591 -0.659h2.9999c0.5967 0 1.1691 0.23705 1.591 0.659 0.4219 0.42195 0.659 0.99424 0.659 1.59097V44.2494c0 0.5967 -0.2371 1.1691 -0.659 1.591 -0.4219 0.4219 -0.9943 0.659 -1.591 0.659Z" stroke-width="1"></path>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        
        teamContainer.appendChild(playerCard);
    });
});