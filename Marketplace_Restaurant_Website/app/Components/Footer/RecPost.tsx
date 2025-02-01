import Image from 'next/image';
import RecPost from '@/app/Components/Footer/Chicken.jpg';
import Link from 'next/link';

export default function RecentPostsSection() {
  const posts = [
    { img: RecPost, title: 'Is fastfood good for your body?', date: 'February 28, 2022' },
    { img: RecPost, title: 'Change your food habit With organic food', date: 'February 28, 2022' },
    { img: RecPost, title: 'Do you like fastfood for your life?', date: 'February 28, 2022' },
  ];

  return (
    <div className="w-full max-w-sm px-4 sm:px-0">
      <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Recent Post</h3>
      {posts.map((post, index) => (
        <Link href='/BlogDetails' key={index} className="flex items-center md:mb-2 mb-6">
          <Image 
            src={post.img} 
            alt="" 
            width={80}
            height={80}
            className="object-cover mr-4" 
          />
          <div>
            <h4 className="font-semibold text-sm sm:text-base">{post.title}</h4>
            <p className="text-xs sm:text-sm text-gray-400">{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
