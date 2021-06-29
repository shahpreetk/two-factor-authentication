import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]

const EducationalProject = () => {
  return (
    <>
      <div className="m-3 p-3">
        <div className="py-12 bg-purple-700 rounded">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="mb-3 font-mono font-bold text-2xl text-white">Breakfast: Name of Dish</h2>
            <p className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-400 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-purple-50">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 text-base text-purple-50">{feature.description}</dd>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationalProject;
