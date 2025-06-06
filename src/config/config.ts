import { Direction } from "@/types";
import { DirectionEnum } from "./direction";
import { Protocol } from "./ protocol";
import { headers } from 'next/headers';

export const getDirection = (locale: string): Direction => {
  return 'he' === locale ? DirectionEnum.rtl : DirectionEnum.ltr;
};

export const getHost = async (domain?: string): Promise<IHost> => {
  const testHost = process.env.NEXT_PUBLIC_TEST_DOMAIN!;
  const getDomain = (current: string): string =>
    current.includes('localhost') ? testHost : current;
  const getProtocol = (current: string): Protocol =>
    current.includes('localhost') ? Protocol.http : Protocol.https;

  if (domain) {
    return {
      protocol: getProtocol(domain),
      domain: getDomain(domain),
    };
  }

  const headersList = await headers();
  const host = headersList.get('host')!;

  return {
    protocol: getProtocol(host),
    domain: getDomain(host),
  };
};