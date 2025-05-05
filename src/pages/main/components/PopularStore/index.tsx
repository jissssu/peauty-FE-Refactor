import { useState, useEffect } from "react";
import { Text } from "../../../../components";
import { Badge } from "../../../../components/category/Badge";
import { colors } from "../../../../style/color";
import { HomeContentsWrapper } from "../../customer/index.styles";
import {
  PopularStoreItem,
  PopularStoreWrap,
  PopularStoreImg,
  PopularStoreText,
} from "./index.styles";
import { NewStoreBadgeWrap } from "../NewStore/index.styles";
import Alo from "../../../../assets/images/alo.png";
import MyBE from "../../../../assets/images/mybeauty.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Store = {
  id: number;
  name: string;
  address: string;
  image: string;
};

export default function PopularStore() {
  const [isLoading, setIsLoading] = useState(true);
  const [stores, setStores] = useState<Store[]>([]); 

  useEffect(() => {
    setTimeout(() => {
      setStores([
        {
          id: 1,
          name: "알로하",
          address: "서울 강남구 논현동",
          image: Alo,
        },
        {
          id: 2,
          name: "마이뷰티독 강남정",
          address: "서울 강남구 역삼동",
          image: MyBE,
        },
      ]);
      setIsLoading(false);
    }, 5000); 
  }, []);

  return (
    <HomeContentsWrapper>
      <Text typo="subtitle200">
        우리동네 <span style={{ color: `${colors.red100}` }}>HOT</span>한 매장
      </Text>
      <PopularStoreWrap>
        {isLoading
          ? Array(2)
              .fill(null)
              .map((_, index) => (
                <PopularStoreItem key={index}>
                   {/* 매장 이미지 로딩 대체용 스켈레톤 (원형) */}
                  {/* <Skeleton width={90} height={90} borderRadius={10} /> */}
                  <Skeleton width={90} height={90} circle={true} />

                  <PopularStoreText>
                     {/* 매장명 텍스트 영역 스켈레톤 */}
                    <Text typo="subtitle300">
                      <Skeleton width={100} />
                    </Text>
                    <Text typo="body400">
                      <Skeleton width={150} />
                    </Text>
                    <NewStoreBadgeWrap>
                      <Skeleton width={80} height={24} borderRadius={12} />
                      <Skeleton width={120} height={24} borderRadius={12} />
                    </NewStoreBadgeWrap>
                  </PopularStoreText>
                </PopularStoreItem>
              ))
          : stores.map((store) => (
              <PopularStoreItem key={store.id}>
                <PopularStoreImg src={store.image} />
                <PopularStoreText>
                  <Text typo="subtitle300">{store.name}</Text>
                  <Text typo="body400">{store.address}</Text>
                  <NewStoreBadgeWrap>
                    <Badge type="general" text="말티즈 전문가" />
                    <Badge type="general" text="반려견 구조 자격증" />
                  </NewStoreBadgeWrap>
                </PopularStoreText>
              </PopularStoreItem>
            ))}
      </PopularStoreWrap>
    </HomeContentsWrapper>
  );
}
