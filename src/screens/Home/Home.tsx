import React from 'react';
import dynamic from 'next/dynamic';


/**
 * @export
 * @components WorkflowContainerDynamic
 * @namespace screens screens/Workflow
 *
 * @description
 * Responsável por ser carregado via lazy load
 */
const PageDynamic = dynamic(
  () => import('@screens/Home/components/ChartPage'),
  {
    loading: () => <h1>Carregando</h1>,
    ssr: false,
  }
);



/**
 * @exports
 * @function
 * @components HomeScreen
 * @param {string} id
 * @namespace screens screens/Workflow
 *
 * @description
 * Responsável pela página de montagem do workflow.
 */
export const HomeScreen = ():JSX.Element => (
  <PageDynamic/>
);
