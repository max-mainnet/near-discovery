import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { VmComponent } from '@/components/vm/VmComponent';

import { Filetype } from '../utils/const';


const Search = ({ widgets, tos, logOut, loadAndOpenFile, refs, refSearch, disable }) => {
  return (
    <>
      {widgets.editorComponentSearch && (
        <div ref={refSearch} style={{ position: 'relative' }}>
          <div className={disable.search ? 'onboardingDisable' : ''}>
            <div style={{ width: '100%', minHeight: '48px' }}>
              <div ref={refs.step5}>
                <div ref={refs.step6}>
                  <div
                    ref={refs.step7}
                    style={{
                      marginTop: '10px',
                    }}
                  >
                    {/* We use the component search widget as a VM entry point to add a TOS check wrapper.
                It does not need to be this component, just some <Widget /> on the page */}
                    <VmComponent
                      src={tos.checkComponentPath}
                      props={{
                        logOut: logOut,
                        tosName: tos.contentComponentPath,
                        targetComponent: widgets.editorComponentSearch,
                        targetProps: () => ({
                          extraButtons: ({ widgetName, widgetPath, onHide }) => (
                            <OverlayTrigger
                              placement="auto"
                              overlay={<Tooltip>{`Open "${widgetName}" component in the editor`}</Tooltip>}
                            >
                              <button
                                className="btn btn-outline-primary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  loadAndOpenFile(widgetPath, Filetype.Widget);
                                  onHide && onHide();
                                }}
                              >
                                Open
                              </button>
                            </OverlayTrigger>
                          ),
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
