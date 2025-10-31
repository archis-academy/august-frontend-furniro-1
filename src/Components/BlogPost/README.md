# 📰 BlogPost Component

## 📖 Overview
**BlogPost** bileşeni, blog sayfalarında veya “latest posts” alanlarında kullanılmak üzere tasarlanmış yeniden kullanılabilir bir React bileşenidir.  
Bu component; bir görsel (`image`), bir başlık (`title`) ve bir kategori (`category`) bilgisi alır.  
Uzun açıklama (`desc`) component içinde sabit olarak tanımlanmıştır.

---

## ⚙️ Props

| Prop Adı | Tip | Açıklama | Örnek Değer |
|-----------|-----|-----------|--------------|
| `image` | `string` | Gösterilecek görselin yolu | `/assets/images/blogpost/post.png` |
| `title` | `string` | Blog yazısının başlığı | `"Going all-in with millennial design"` |
| `category` | `string` | Blog yazısının kategorisi | `"Wood"` |

---

## 💻 Kullanım

Aşağıdaki örnek, `BlogPost` bileşeninin üç farklı versiyonunu göstermektedir:

```jsx
import { BlogPost } from './components/BlogPost/BlogPost';

function BlogSection() {
  return (
    <div>
      <BlogPost
        image="/assets/images/blogpost/post.png"
        title="Going all-in with millennial design"
        category="Wood"
      />

      <BlogPost
        image="/assets/images/blogpost/post_2.png"
        title="Exploring new ways of decorating"
        category="Handmade"
      />

      <BlogPost
        image="/assets/images/blogpost/post_3.png"
        title="Handmade pieces that took time to make"
        category="Wood"
      />
    </div>
  );
}

export default BlogSection;
