'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/api/axiosInstance';
import SearchParamsHandler from '@/components/SearchParamsHandler';
import ButtonRectangular from '@/components/ButtonRectangular';

type BaseImage = {
  imgUrl: string;
  originPictureId: number;
};

export default function SelectFullBody() {
  const [images, setImages] = useState<BaseImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBaseImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get<BaseImage[]>(
          '/origin-picture/base-image'
        );
        setImages(response.data);
      } catch (error) {
        console.error('이미지 로드 실패:', error);
        setError('이미지를 불러오는 중 문제가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchBaseImages();
  }, []);

  const handleAddPhotoClick = () => {
    router.push('/my');
  };

  return (
    <div className='relative flex flex-col items-center w-full min-h-screen bg-white'>
      <div className='relative flex flex-col items-center w-full max-w-[600px] p-4'>
        <header className='w-full py-4 px-6 text-left'>
          <h1 className='text-2xl font-semibold'>전신 사진 선택</h1>
        </header>

        {error ? (
          <p className='text-red-500 text-center'>{error}</p>
        ) : loading ? (
          <div className='flex items-center justify-center w-full h-40'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500'></div>
          </div>
        ) : images.length === 0 ? (
          <div className='flex flex-col items-center w-full mt-6'>
            <p className='text-gray-500 text-lg mb-4'>
              등록된 전신 사진이 없습니다.
            </p>
            <ButtonRectangular
              text='전신 사진 추가하러 가기'
              onClick={handleAddPhotoClick}
              disabled={false}
            />
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-4 w-full mt-6'>
            {images.map((image) => (
              <SearchParamsHandler
                key={image.originPictureId}
                imageUrl={image.imgUrl}
                imageId={image.originPictureId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
