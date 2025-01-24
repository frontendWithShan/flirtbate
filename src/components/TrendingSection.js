import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/TrendingSection.module.css';

const TrendingSection = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const scroll = scrollRef.current;
    let scrollAmount = 0;
    let animationFrameId;

    const performScroll = () => {
      if (isAutoScrolling && scroll) {
        scrollAmount += 1;
        if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
          scroll.scrollLeft = 0;
        } else {
          scroll.scrollLeft = scrollAmount;
        }
        animationFrameId = requestAnimationFrame(performScroll);
      }
    };

    if (isAutoScrolling) {
      animationFrameId = requestAnimationFrame(performScroll);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAutoScrolling]);

  const trendingUsers = [
    { 
      id: 'siri',
      name: 'Siri', 
      country: 'Lesotho', 
      image: 'https://picsum.photos/id/1/50/50'
    },
    { 
      id: 'rayna',
      name: 'Rayna', 
      country: 'Belgium', 
      image: 'https://picsum.photos/id/2/50/50'
    },
    { 
      id: 'fana',
      name: 'Fana', 
      country: 'Korea', 
      image: 'https://picsum.photos/id/3/50/50'
    },
    { 
      id: 'jest',
      name: 'Jest', 
      country: 'Angola', 
      image: 'https://picsum.photos/id/4/50/50'
    },
    { 
      id: 'ksenia',
      name: 'Ksenia', 
      country: 'Bhutan', 
      image: 'https://picsum.photos/id/5/50/50'
    },
    { 
      id: 'ayush',
      name: 'Ayush Soni', 
      country: 'American', 
      image: 'https://picsum.photos/id/6/50/50'
    },
    { 
      id: 'titi',
      name: 'Titi yad', 
      country: 'Albania', 
      image: 'https://picsum.photos/id/7/50/50'
    },
   ];

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  const usersToRender = [
    ...trendingUsers.map(user => ({...user, id: `${user.id}-1`})),
    ...trendingUsers.map(user => ({...user, id: `${user.id}-2`}))
  ];

  return (
    <section 
      className={styles.trending} 
      aria-label="Trending Users"
    >
      <h2>🔥 Trending Now</h2>
      <div 
        ref={scrollRef}
        className={styles.scrollContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {usersToRender.map((user) => (
          <div key={user.id} className={styles.user}>
            <Image 
              src={user.image}
              alt={user.name}
              width={50}
              height={50}
              className={styles.userImage}
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwZJjAlJS5CYE5vUlVtb3eAkLh/QkNMbXpodFR0d3CMkYSOjGh2dXeJk6SIjv/bAEMBFRcXHhoeNyUlN3bNdHbdtru2trbbttm2trbd2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2//AABEIAAUACAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlgAH/9k="
            />
            <div className={styles.userInfo}>
              <p className={styles.name}>{user.name}</p>
              <span className={styles.country}>{user.country}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(TrendingSection);