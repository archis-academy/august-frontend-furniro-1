# ProductCard Component

Bu component, ürün kartı olarak kullanılmak üzere tasarlanmıştır. Ürün görseli, rozet (badge), beğenme, arama ve sepete ekleme butonları ile birlikte ürün adı, açıklaması, yıldız puanı ve fiyat bilgilerini gösterir.

## Kullanım

```jsx
import ProductCard from './Components/ProductCard';

<ProductCard
  variant="ribbon"      // 'ribbon' veya 'pill' (rozet tipi)
  badgeText="NEW"       // Rozet üzerinde gösterilecek metin
  rating={4}            // 0-5 arası yıldız puanı
/>
```

### Props

| Prop       | Tip     | Açıklama                                      | Varsayılan |
|------------|---------|-----------------------------------------------|------------|
| variant    | string  | Rozet tipi: `'ribbon'` veya `'pill'`          | `'ribbon'` |
| badgeText  | string  | Rozet üzerinde gösterilecek metin              | `'NEW'`    |
| rating     | number  | Yıldız puanı (0-5 arası)                      | `4`        |

### Özellikler

- Ürün görseli ve adı sabittir (örnek olarak "Syltherine").
- Beğenme butonu ile ürün favorilere eklenebilir.
- Arama ve sepete ekleme butonları görsel amaçlıdır.
- Fiyat ve indirimli fiyat gösterimi mevcuttur.

### Stiller

Component, `ProductCard.module.scss` dosyasındaki stilleri kullanır.

---

Daha fazla özelleştirme için componenti düzenleyebilirsiniz.