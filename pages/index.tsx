import React from 'react';
import { NextPage } from 'next';

import HomeScreens from '@screens/Home';

/**
 * @export
 * @components
 * @function
 * @name IndexPage
 * @namespace pages
 *
 * @description
 * Responsável pelo boot inicial.
 * https://github.com/celfinn/reactjs-template/blob/master/src/store/ducks/user.ts
 */
const IndexPage: NextPage = () => <HomeScreens />;

export default IndexPage;
