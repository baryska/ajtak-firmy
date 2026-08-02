import { fetchServices } from '@/api/services';
import HomeClient from './HomeClient';

export const revalidate = 3600;

export default async function Home() {
	const services = await fetchServices();
	return <HomeClient services={services} />;
}
