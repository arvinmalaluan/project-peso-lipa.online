export const CompatibilityCard = ({ data }) => {
  return (
    <div className="p-4 border rounded">
      <p className="text-xs text-gray-500">{data.job_title}</p>
      <p className="font-semibold">{`${data.percentage} Compatible`}</p>
    </div>
  );
};

export const JobPostedCard = ({ data }) => {
  return (
    <div className="p-4 border rounded">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-500">Deadline: Jan. 23, 2024</p>
          <p className="mt-1 text-sm font-semibold line-clamp-1">
            {data.job_title}
          </p>
        </div>
        <span className="px-2 py-1 text-xs text-white rounded-full bg-primary-900">
          Closed
        </span>
      </div>
      <p className="mt-4 text-xs text-gray-500 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sed
        doloribus quaerat vero quod quos minima amet, earum unde consequuntur
        alias, aliquam, ducimus nobis debitis quae sapiente dolorum mollitia
        consectetur. Quae quam exercitationem vitae explicabo ea autem assumenda
        quod repellendus odio consectetur harum magni recusandae architecto illo
        similique nam, fuga odit voluptatem neque ratione. Repellendus optio
        iusto soluta ipsam, dolorum magni labore impedit quibusdam sequi
        cupiditate, aperiam sed debitis, ad reprehenderit minus illum repellat
        ipsa! Repellat culpa quod voluptatibus nobis inventore eveniet placeat
        earum vel odio, deserunt quo explicabo ad voluptates natus
        necessitatibus laudantium debitis. Ullam et vero praesentium!
      </p>
      <p className="mt-4 text-xs text-gray-500">
        <b>1.1k</b> people applied to this
      </p>
    </div>
  );
};
