import React, { useState, useEffect } from 'react';
import {AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import {EditorTabs, FitlerTabs, DecalTypes } from '../config/constants';




const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer