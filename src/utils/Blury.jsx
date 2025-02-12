/**
 * `Blury` یک پس‌زمینه متحرک است که به راحتی می‌توان آن را در پروژه استفاده کرد.
 *
 * 🎯 **نحوه استفاده**:
 * ۱. `Blury` را در `App.jsx` یا هر صفحه‌ای که پس‌زمینه لازم دارد، ایمپورت کن.
 * ۲. محتوای اصلی را درون یک `div` با `relative z-10` قرار بده تا روی پس‌زمینه نمایش داده شود.
 */

function Blury() {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gray-300">
      {/* اشکال متحرک */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-purple-100 rounded-full opacity-40 sm:w-72 filter blur-3xl sm:h-72 lg:w-96 lg:h-96 animate-blob mix-blend-multiply animation-delay-2000"></div>
      <div className="absolute bottom-0 w-56 h-56 bg-orange-100 rounded-full opacity-40 left-20 filter blur-3xl sm:w-72 sm:h-72 lg:w-96 lg:h-96 animate-blob mix-blend-multiply"></div>
      <div className="absolute top-0 right-0 w-56 h-56 bg-yellow-100 rounded-full opacity-40 filter blur-3xl sm:w-72 sm:h-72 lg:w-96 lg:h-96 animate-blob mix-blend-multiply animation-delay-4000"></div>

      {/* لایه نیمه‌شفاف برای وضوح بیشتر محتوای روی پس‌زمینه */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md"></div>
    </div>
  );
}

export default Blury;
