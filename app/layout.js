import './styles.css';

export const metadata = {
  title: 'BookIt.im — Book anything on the Isle of Man',
  description: 'Find and book appointments, treatments, services, activities and more across the Isle of Man.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
