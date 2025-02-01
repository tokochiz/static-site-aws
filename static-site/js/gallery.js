// gallery.js
document.addEventListener('DOMContentLoaded', async function() {
    // メタデータをS3から読み込む
    async function loadPhotoMetadata() {
        try {
            const response = await fetch('photos/metadata.json');
            const metadata = await response.json();
            return metadata;
        } catch (error) {
            console.error('メタデータの読み込みに失敗:', error);
            return [];
        }
    }

    // 写真グリッドを生成
    async function renderPhotoGrid() {
        const metadata = await loadPhotoMetadata();
        const photoGrid = document.getElementById('photo-grid');
        
        metadata.photos.forEach(photo => {
            const photoElement = document.createElement('div');
            photoElement.className = 'photo-item';
            
            photoElement.innerHTML = `
                <img src="${photo.thumbnailUrl}" 
                     alt="${photo.description}"
                     data-full-size="${photo.originalUrl}"
                     loading="lazy">
                <div class="photo-caption">${photo.title}</div>
            `;
            
            photoElement.addEventListener('click', () => {
                openLightbox(photo.originalUrl, photo.title);
            });
            
            photoGrid.appendChild(photoElement);
        });
    }

    // 初期表示
    renderPhotoGrid();
});

// S3のメタデータ構造の例
const metadataExample = {
    "photos": [
        {
            "id": "photo1",
            "title": "おやつタイム",
            "description": "あまりにもコミカルな顔",
            "thumbnailUrl": "photos/thumbnails/dog_photo1.webp",
            "originalUrl": "photos/original/dog_photo1.webp",
            "dateCreated": "2024-02-01"
        }
        // ... 他の写真
    ]
};