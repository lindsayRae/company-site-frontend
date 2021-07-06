import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogItem.module.css';

export default function BlogItem({ b }) {
  console.log(b);
  return (
    <div>
      <div>
        <Image
          src={b.image ? b.image.formats.thumbnail.url : '/images/blank.jpg'}
          width={170}
          height={100}
        />
      </div>
      <div>
        <h3>{b.title}</h3>
      </div>
      <div>
        <Link href={`/blog/${b.slug}`}>
          <a>Details</a>
        </Link>
      </div>
    </div>
  );
}
