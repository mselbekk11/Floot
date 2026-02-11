export default function BentoFour() {
  return (
    <section className='bg-[#1A1A1A] texture-four @container py-24'>
      <div className='relative z-10 max-w-7xl mx-auto bg-[#1A1A1A] p-8 border-2 border-[#383837]'>
        <h1 className='text-2xl font-bold mb-10 text-white z-50 relative max-w-7xl mx-auto'>
          Build Anything with confidence
        </h1>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-white border-2 border-[#383837] rounded-lg p-3'>
              <div className='flex flex-col gap-2 bg-[#402b82] h-full border-2 border-[#000000] p-4 min-h-[200px]'>
                <h3 className='text-2xl font-bold text-white'>
                  Accept Payments
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Automate your home lighting with customizable schedules.
                </p>
              </div>
            </div>

            <div className='bg-white border-2 border-[#383837] rounded-lg p-3'>
              <div className='flex flex-col gap-2 bg-[#70539D] h-full border-2 border-[#000000] p-4 min-h-[200px]'>
                <h3 className='text-2xl font-bold text-white'>
                  User Management & Authentication
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Automate your home lighting with customizable schedules.
                </p>
              </div>
            </div>

            <div className='bg-white border-2 border-[#383837] rounded-lg p-3'>
              <div className='flex flex-col gap-2 bg-[#70539D] h-full border-2 border-[#000000] p-4 min-h-[200px]'>
                <h3 className='text-2xl font-bold text-white'>
                  Backend & Database
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Add comments, share insights, and work together with your
                  team.
                </p>
              </div>
            </div>

            <div className='sm:col-span-2 bg-white border-2 border-[#383837] rounded-lg p-3'>
              <div className='flex flex-col gap-2 bg-[#402b82] h-full border-2 border-[#000000] p-4 min-h-[200px]'>
                <h3 className='text-2xl font-bold text-white'>
                  1 Click Hosting
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Create custom dashboards with drag-and-drop simplicity.
                  Combine multiple visualization types to get a complete view of
                  your data story.
                </p>
              </div>
            </div>

            <div className='bg-white border-2 border-[#383837] rounded-lg p-3'>
              <div className='flex flex-col gap-2 bg-[#70539D] h-full border-2 border-[#000000] p-4 min-h-[200px]'>
                <h3 className='text-2xl font-bold text-white'>Monitoring</h3>
                <p className='text-sm text-muted-foreground'>
                  Automate your home lighting with customizable schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
